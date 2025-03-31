const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 1000 },
    { id: 2, name: 'Smartphone', category: 'electronics', price: 500 },
    { id: 3, name: 'Table', category: 'furniture', price: 150 },
    { id: 4, name: 'Chair', category: 'furniture', price: 75 }
];




app.get('/products', (req, res) => {
    const { category } = req.query;
    if (category) {
        const filteredProducts = products.filter(p => p.category === category);
        return res.json(filteredProducts);
    }
    res.json(products);
});

app.get('/products', (req, res) => {
    res.json(products)
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
});






app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
