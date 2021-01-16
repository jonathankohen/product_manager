import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductForm2 from '../components/ProductForm2';
import ProductTable from '../components/ProductTable';

const Main = () => {
    const [products, setProducts] = useState([]),
        [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.results);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = productId => {
        setProducts(products.filter(product => product._id !== productId));
    };

    return (
        <>
            <ProductForm2 />
            <hr />
            {loaded && (
                <ProductTable products={products} handleDelete={handleDelete} />
            )}
        </>
    );
};

export default Main;
