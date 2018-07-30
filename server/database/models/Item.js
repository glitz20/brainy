var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var item = new Schema({

    itemname: String,
    category: String,
    description: String


}, {
        collection: 'items'
    });

module.exports = mongoose.model('item', item);
