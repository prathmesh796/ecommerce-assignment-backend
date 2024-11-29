const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Add item to cart
router.post('/add', async (req, res) => {
    const { userId, productId, quantity } = req.body;
    const cart = await Cart.findOne({ userId });

    if (cart) {
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }
        await cart.save();
    } else {
        const newCart = new Cart({ userId, items: [{ productId, quantity }] });
        await newCart.save();
    }
    res.status(200).json({ message: 'Item added to cart' });
});

// View cart
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId }).populate('items.productId');
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Remove item from cart
router.delete('/remove', async (req, res) => {
    const { userId, productId } = req.body;
    const cart = await Cart.findOne({ userId });

    if (cart) {
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
    }
    res.status(200).json({ message: 'Item removed from cart' });
});

module.exports = router;