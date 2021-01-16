import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

import ProductForm from '../components/ProductForm';

const Main = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data.results))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <ProductForm />
            <br />
            {products.map((product, i) => {
                return (
                    <Link to={`/products/${product._id}`} key={i}>
                        {product.title}
                    </Link>
                );
            })}
        </>
    );
};

export default Main;
