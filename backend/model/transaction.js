const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    Trasaction_id: {
        type: Number
    },
    Input_category_name: {
        type: String,
        required: true
    },
    Input_weight: {
        type: Number,
        required: true
    },
    Output_category_name: {
        type: String,
        required: true
    },
    Output_weight: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        default: () => moment(new Date()).format('YYYY-MM-DD'),
        required: true
    },
    Process_name: {
        type: String,
        required: true
    },
    Place_id: {
        type: Number,
        required: true
    }
});

const Transaction = mongoose.model('transaction', TransactionSchema);

module.exports = Transaction;