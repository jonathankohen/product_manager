import React, { useState } from 'react';
// import axios from 'axios';

const ProductForm2 = props => {
    const { initialTitle, initialPrice, initialDesc, onSubmitProp } = props,
        [title, setTitle] = useState(initialTitle),
        [price, setPrice] = useState(initialPrice),
        [desc, setDesc] = useState(initialDesc);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ title, price, desc });
    };

    return (
        <form onSubmit={onSubmitHandler} className="my-5">
            <input
                className="form-control"
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Price"
                name="price"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
            <input
                className="form-control"
                type="text"
                placeholder="Description"
                name="desc"
                value={desc}
                onChange={e => setDesc(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default ProductForm2;
