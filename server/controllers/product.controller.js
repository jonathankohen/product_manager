const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello World',
    });
};

module.exports.createProduct = (req, res) => {
    const { title, price, desc } = req.body;
    Product.create({
        title,
        price,
        desc,
    })
        .then((product) => res.json(product))
        .then((err) => res.json(err));
};
