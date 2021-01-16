import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

import DeleteButton from '../components/DeleteButton';

const Show = props => {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        desc: '',
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err));
    }, [props]);

    return (
        <>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <p>{product.desc}</p>
            <Link to={`/products/edit/${product._id}`}>Edit</Link>
            <Link to="/">Go Back</Link>
            <DeleteButton
                productId={product._id}
                successCallback={() => navigate('/')}
            />
        </>
    );
};

export default Show;
