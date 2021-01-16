import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

import EditForm from '../components/EditForm';

export default function Edit(props) {
    const [init] = useState({
            title: '',
            price: 0,
            desc: '',
        }),
        [edit, setEdit] = useState(init),
        [errors, setErrors] = useState(init),
        { id } = props;

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err));
    }, [id]);

    const handleOnChange = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        setErrors(init);
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/edit/${id}`, edit)
            .then(res => {
                if (res.data) {
                    navigate(`/products/${id}`);
                } else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <EditForm
                inputs={edit}
                errors={errors}
                handleOnChange={handleOnChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
}
