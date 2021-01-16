import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = productId => {
        setProducts(products.filter(product => product._id !== productId));
    };

    return (
        <>
            <ProductForm />
            <ProductTable products={products} handleDelete={handleDelete} />
        </>
    );
};

export default Main;
