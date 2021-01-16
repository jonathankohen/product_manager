import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

import DeleteButton from '../components/DeleteButton';

const ProductTable2 = props => {
    const { products, setProducts } = props;

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => {
                        return (
                            <tr key={i}>
                                <th scope="row">{product.title}</th>
                                <td>{product.price}</td>
                                <td>{product.desc}</td>
                                <td>
                                    <Link to={`/products/${product._id}`}>
                                        View
                                    </Link>
                                    <DeleteButton
                                        productId={product._id}
                                        successCallback={() =>
                                            removeFromDom(product._id)
                                        }
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ProductTable2;
