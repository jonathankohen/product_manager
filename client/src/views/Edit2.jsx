import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

import ProductForm2 from '../components/ProductForm2';
import DeleteButton from '../components/DeleteButton';

const Edit2 = props => {
    const { id } = props,
        [product, setProduct] = useState(),
        [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setProduct(res.data.results);
                setLoaded(true);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, []);

    const updateProduct = updatedProduct => {
        axios
            .put(
                `http://localhost:8000/api/products/edit/${id}`,
                updatedProduct
            )
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };
    return (
        <>
            <h1>Edit Product</h1>
            {loaded && (
                <>
                    <ProductForm2
                        onSubmitProp={updateProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDesc={product.desc}
                    />
                    <hr />
                    <DeleteButton
                        productId={product._id}
                        successCallback={() => navigate('/')}
                    />
                </>
            )}
            <Link to="/">Go Back</Link>
        </>
    );
};

export default Edit2;
