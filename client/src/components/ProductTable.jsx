import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default function ProductTable(props) {
    const { products, handleDelete } = props;

    const deleteProduct = productFormId => {
        axios
            .delete(
                `http://localhost:8000/api/products/delete/${productFormId}`
            )
            .then(res => {
                handleDelete(productFormId);
            })
            .catch(err => console.log(err));
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
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger ml-3"
                                        onClick={e =>
                                            deleteProduct(product._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
