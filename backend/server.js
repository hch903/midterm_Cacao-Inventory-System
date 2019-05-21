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
const db = mongoose.connection

db.on('error', error => {
    console.log(error)
})

db.once("open", () => {
    console.log('MongoDB connected!');
});

let Transaction = require('./model/transaction.js');
router.post('/raw-material', (req, res) => {
    let transaction = new Transaction(req.body);
    transaction.save()
        .then(() => {
            return res.send("Create transaction sucessfully!");
        })
        .catch((err) => {
            res.send(err);
        })
});
router.post('/data-input', (req, res) => {
    let transaction = new Transaction(req.body);
    transaction.save()
        .then(() => {
            return res.send("Create transaction sucessfully!");
        })
        .catch((err) => {
            res.send(err);
        })
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
    console.log(req.body);

    let start_date = req.body.start_date;
    let end_date = req.body.end_date;
    let process = req.body.process;
    let placeId = req.body.placeId;
    let transactions = [];
    // Transaction.find({
    //     Date: {$gte: start_date, $lte: end_date},
    //     Process: process,
    //     Place_id: placeId,}, 
    //     function(err, tmpTransactions){
    //         if (err){
    //             console.log(err);
    //         } else {
    //             console.log("in date");
    //             if (tmpTransactions !== null)
    //                 transactions = transactions.concat(tmpTransactions);
    //                 res.json(transactions);
    //         }
    //     });

    if (start_date !== '' && end_date !== ''){
        Transaction.find({Date: {$gte: start_date, $lte: end_date}}, function(err, tmpTransactions){
            if (err){
                console.log(err);
            } else {
                if (tmpTransactions !== null)
                    res.json(tmpTransactions);
            }
        });
    }
    if (process !== ''){
        Transaction.find({Process: process}, function(err, tmpTransactions){
            if (err){
                console.log(err);
            } else {
                if (tmpTransactions !== null)
                    res.json(tmpTransactions);
            }
        });
    }
    if(placeId !== ''){
        Transaction.find({Place_id: placeId}, function(err, tmpTransactions){
            if (err){
                console.log(err);
            } else {
                if (tmpTransactions !== null)
                    res.json(tmpTransactions);
            }
        });
    }
});
router.get('/:category', (req, res) => {
    let category = req.params.category;
    let transactions = [];
    Transaction.find({Input_category_name: category}, function(err, tmpTransactions) {
        if (err) {
            console.log(err);
        } else {
            if (tmpTransactions !== null)
                transactions = tmpTransactions;
        }
    });
    Transaction.find({Output_category_name: category}, function(err, tmpTransactions) {
        if (err) {
            console.log(err);
        } else {
            if (tmpTransactions !== null)
                transactions = transactions.concat(tmpTransactions);
            console.log(transactions);
            res.json(transactions);
        }
    });
});


// Transaction.deleteMany({}, ()=> {
//     console.log("deleted!");
// })
app.use('/', router);