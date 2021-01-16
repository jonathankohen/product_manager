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

    update_product: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            useFindAndModify: false,
        })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => console.log(err));
    },

    delete_product: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then(confirmation => res.json({ results: confirmation }))
            .catch(err => res.json(err.errors));
    },
};
