import React from 'react';

export default function EditForm(props) {
    const { handleOnChange, handleSubmit, errors, inputs } = props;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        id="title"
                        onChange={handleOnChange}
                        value={inputs.title}
                    />
                    <span className="text-danger">
                        {errors.name ? errors.name.message : null}
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                        id="price"
                        onChange={handleOnChange}
                        value={inputs.price}
                    />
                    <span className="text-danger">
                        {errors.price ? errors.price.message : null}
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        name="desc"
                        id="desc"
                        onChange={handleOnChange}
                        value={inputs.desc}
                    />
                    <span className="text-danger">
                        {errors.desc ? errors.desc.message : null}
                    </span>
                </div>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}
