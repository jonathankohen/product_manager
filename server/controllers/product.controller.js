const { Product } = require('../models/product.model');

module.exports = {
    all_products: (req, res) => {
        Product.find()
            .then(products => res.json({ results: products }))
            .catch(err => console.log(err));
    },

    create_product: (req, res) => {
        const { title, price, desc } = req.body;
        Product.create({
            title,
            price,
            desc,
        })
            .then(product => res.json(product))
            .catch(err => console.log(err));
    },

    one_product: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then(productData => res.json({ results: productData }))
            .catch(err => console.log(err));
    },
};
