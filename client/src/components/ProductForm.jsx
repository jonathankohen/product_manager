import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState(''),
        [price, setPrice] = useState(0),
        [desc, setDesc] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/products/create', {
                title,
                price,
                desc,
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input
                className="form-control"
                type="text"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Price"
                onChange={e => setPrice(e.target.value)}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Description"
                onChange={e => setDesc(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ProductForm;
