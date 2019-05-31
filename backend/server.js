const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
var cors = require('cors');

// Create server to serve
const app = express()
app.use(cors());
const http = require('http').Server(app)
const port = process.env.PORT || 4000

// Routing
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start server listening process.
http.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
})

// Connect to mongo
mongoose.connect('mongodb+srv://Winston:Hsieh@cluster0-lrz44.gcp.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
})

mongoose.set('useFindAndModify', false);

const db = mongoose.connection

db.on('error', error => {
    console.log(error)
})

db.once("open", () => {
    console.log('MongoDB connected!');
});



let Inventory = require('./model/inventory.js');
// let category = ['Fermented Beans','Unfermented Beans'];
// let status = ['Raw Material', 'Roasted Beans', 'Winnowed Beans', 'Ground Beans', ['Chocolate Bars', 'Cocoa Powder']];

// let t = 0;
// for(let i = 0; i < category.length; i++){
//     for(let j = 0; j < status.length; j++){
//         let object = {};
//         object.Category_name = category[i];
//         if(j === 4)
//             object.Status_name = status[j][i];
//         else
//             object.Status_name = status[j];
//         object.Quantity = 0;
        
//         console.log(t,object.Category_name, object.Status_name);
//         t++;
//         let inventory = new Inventory(object);
//         inventory.save()
//             .then(() => {console.log("inventory initialized!")})
//             .catch((err) => {console.log(err)});
//     }
// }

let Transaction = require('./model/transaction.js');

router.post('/raw-material', (req, res) => {
    let transaction = new Transaction(req.body);
    if(req.body.Date === '')
        res.send("Please select date!")
    else if(req.body.Place_id === '')
        res.send("Please enter place ID!") 
    else if(req.body.Output_category_name === '')
        res.send("Please select category!")
    else if (req.body.Output_weight === '')
        res.send("Please enter weight!");
    else{
        transaction.save()
            .then(() => {
                return res.send("Create transaction sucessfully!");
            })
            .catch((err) => {
                res.send(err);
            })

        let category = req.body.Output_category_name;
        category = category.split(' ');
        let status = category[1] + ' ' + category[2];
        category = category[0] + ' Beans';

        let increase = req.body.Output_weight;
        // console.log(category, status, increase);
        Inventory.findOneAndUpdate(
            {$and: [ {Category_name: category}, {Status_name: status}, ]},
            {$inc: {Quantity: increase}},
            function (err, inventory) {
                if (err) console.log(err);
                else console.log("Update inventory successfully");
            }
        )
    }
    
});
router.post('/data-input', (req, res) => {
    let transaction = new Transaction(req.body);
    if(req.body.Date === '')
        res.send("Please select date!")
    else if(req.body.Process_name === '')
        res.send("Please select process!")
    else if(req.body.Place_id === '')
        res.send("Please enter place ID!") 
    else if(req.body.Output_category_name === '' || req.body.Input_category_name === '' )
        res.send("Please select category!")
    else if (req.body.Output_weight === '' || req.body.Input_weight === '')
        res.send("Please enter weight!");
    else{
        transaction.save()
            .then(() => {
                return res.send("Create transaction successfully!");
            })
            .catch((err) => {
                res.send(err);
            })
        
        let input_category = req.body.Input_category_name;
        input_category = input_category.split(' ');
        let input_status = input_category[1] + ' ' + input_category[2];
        input_category = input_category[0] + ' Beans';

        let decrease = -1 * req.body.Input_weight;
        
        let output_category = req.body.Output_category_name;
        output_category = output_category.split(' ');
        let output_status = output_category[1] + ' ' + output_category[2];
        output_category = output_category[0] + ' Beans';

        let increase = req.body.Output_weight;

        Inventory.findOne(
            {$and: [ {Category_name: input_category}, {Status_name: input_status}, ]},
            function (err, tmpInventory){
                if(tmpInventory.Quantity + decrease < 0)
                    res.send("No more input inventory!")
                else{
                    Inventory.findOneAndUpdate(  
                        {$and: [ {Category_name: input_category}, {Status_name: input_status}, ]},
                        {$inc: {Quantity: decrease}},
                        function (err) {
                            if (err) console.log(err);
                        }
                    )
                    Inventory.findOneAndUpdate(  
                        {$and: [ {Category_name: output_category}, {Status_name: output_status}, ]},
                        {$inc: {Quantity: increase}},
                        function (err) {
                            if (err) console.log(err);
                            else console.log("Update inventory successfully");
                        }
                    )
                }
            }
        )
        
        
    }
    
});
// all transaction
router.get('/search', (req, res) => {
    Transaction.find(function (err, transactions) {
        if (err) {
            console.log(err);
        } else {
            res.json(transactions);
        }
    });
});
router.post('/search', (req, res) => {
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let process = req.body.process;
    let placeId = req.body.placeId;
    let query = {};

    process = process.charAt(0).toUpperCase() + process.slice(1);

    if(start_date && end_date){
        let date = {}
        date.$gte = start_date;
        date.$lte = end_date;
        query.Date = date;
    }
    if(process)
        query.Process_name = process;
    if(placeId)
        query.Place_id = placeId;

    Transaction.find(query, function(err, tmpTransactions){
        if (err){
            console.log(err);
        } else {
            if (tmpTransactions !== null)
                res.json(tmpTransactions);
        }
    });
});
router.get('/summary', (req, res) => {
    Inventory.find(function (err, inventory) {
        if (err) {
            console.log(err);
        } else {
            res.json(inventory);
        }
    });
})

router.get('/:category', (req, res) => {
    let category = req.params.category;
    let transactions = [];
    Transaction.find({
        $or: [
            {Output_category_name: category},
            {Input_category_name: category},
        ]}, function(err, tmpTransactions) {
            if (err) {
                console.log(err);
            } else {
                if (tmpTransactions !== null)
                    transactions = transactions.concat(tmpTransactions);
                res.json(transactions);
            }
    });
});

router.post('/:category', (req, res) => {
    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let process = req.body.process;
    let placeId = req.body.placeId;
    let category = req.params.category;
    let query = {};

    process = process.charAt(0).toUpperCase() + process.slice(1);

    if(start_date && end_date){
        let date = {}
        date.$gte = start_date;
        date.$lte = end_date;
        query.Date = date;
    }
    if(process)
        query.Process_name = process;
    if(placeId)
        query.Place_id = placeId;

    let or = [];
    let Output_category_name = {};
    let Input_category_name = {};
    Output_category_name.Output_category_name = category;
    Input_category_name.Input_category_name = category;
    or[0] = Output_category_name;
    or[1] = Input_category_name;
    
    query.$or = or;
    Transaction.find(query, function(err, tmpTransactions){
        if (err){
            console.log(err);
        } else {
            if (tmpTransactions !== null)
                res.json(tmpTransactions);
        }
    });

});



// Inventory.deleteMany({}, ()=> {
//     console.log("deleted!");
// })
app.use('/', router);