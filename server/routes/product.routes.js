const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.all_products);
    app.post('/api/products/create', ProductController.create_product);
    app.get('/api/products/:id', ProductController.one_product);
};
