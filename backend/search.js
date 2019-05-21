const search = require('express').Router();
let Transaction = require('./model/transaction.js');
search.get('/', (req, res) => {
    console.log("err in");
    Transaction.find(function (err, transactions) {
        if (err) {
            console.log(err);
        } else {
            res.json(transactions);
        }
    });
});

search.get('/:category', (req, res) => {
    console.log("in");
    let category = req.params.category;
    console.log(category);
    // Transaction.findOne({}
    // )
})

module.exports = search;