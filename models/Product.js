const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    imageUrl: String,
    description: String,
});

module.exports = mongoose.model('Product', productSchema);