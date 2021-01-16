const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: String,
        price: Number,
        desc: String,
    },
    { timestamps: true }
);

module.exports.Product = mongoose.model('Product', ProductSchema);
