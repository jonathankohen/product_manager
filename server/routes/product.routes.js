const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.all_products);
    app.post('/api/products/create', ProductController.create_product);
    app.get('/api/products/:id', ProductController.one_product);
    app.put('/api/products/edit/:id', ProductController.update_product);
    app.delete('/api/products/delete/:id', ProductController.delete_product);
};
