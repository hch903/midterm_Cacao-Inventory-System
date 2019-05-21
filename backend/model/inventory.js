const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    Inventory_id: {
        type: Number
    },
    Category_name: {
        type: String
    },
    Place_id: {
        type: Number
    },
    Quantity: {
        type: Number
    }
});

const Inventory = mongoose.model('inventory', InventorySchema);

module.exports = Inventory;