const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    category: String,
    imageURL: String,
    description: String,
});

module.exports = mongoose.model('Product', productSchema);