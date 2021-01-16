import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
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
    }, [props]);

    const handleDelete = () => {
        axios
            .delete(`http://localhost:8000/api/products/delete/${props.id}`)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <p>{product.desc}</p>
            <Link to={`/products/edit/${product._id}`}>Edit</Link>
            <Link to="/">Go Back</Link>
            <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>
        </>
    );
}
