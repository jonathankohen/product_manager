import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Show(props) {
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
    });

    return (
        <>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <p>{product.desc}</p>
        </>
    );
}
