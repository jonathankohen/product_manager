import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductForm2 from '../components/ProductForm2';
import ProductTable2 from '../components/ProductTable2';

const Main2 = () => {
    const [products, setProducts] = useState([]),
        [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products').then(res => {
            setProducts(res.data.results);
            setLoaded(true);
        });
    }, []);

    const createProduct = newProduct => {
        axios
            .post('http://localhost:8000/api/products/create', newProduct)
            .then(res => setProducts([...products, res.data]));
    };

    return (
        <>
            <ProductForm2
                onSubmitProp={createProduct}
                initialTitle=""
                initialPrice=""
                initialDesc=""
            />
            <hr />
            {loaded && (
                <ProductTable2 products={products} setProducts={setProducts} />
            )}
        </>
    );
};

export default Main2;
