const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Fetch products with pagination and filters
router.get('/products', async (req, res) => {
    const { page = 1, limit = 12, category, minPrice, maxPrice } = req.query;
    const query = {};

    if (category) query.category = category;
    if (minPrice || maxPrice) {
        const min = minPrice ? parseFloat(minPrice) : 0;
        const max = maxPrice ? parseFloat(maxPrice) : Number.MAX_VALUE;

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