const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    Status_name: {
        type: String
    },
    Category_name: {
        type: String
    },
    Quantity: {
        type: Number
    }
});

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;