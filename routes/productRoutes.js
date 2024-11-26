const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Fetch products with pagination and filters
router.get('/', async (req, res) => {
    const { page = 1, limit = 10, category, priceRange } = req.query;
    const query = {};

    if (category) query.category = category;
    if (priceRange) {
        const [min, max] = priceRange.split(',');
        query.price = { $gte: min, $lte: max };
    }

    const products = await Product.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit);
    
    const count = await Product.countDocuments(query);
    res.json({
        products,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
    });
});

module.exports = router;