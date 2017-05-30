import React from 'react';

const SingleProduct = (props) => {
    return (
        <div className="col s3">
            <div className="card">
                <div className="card-image">
                    <img src={props.product.image}/>
                    <span className="card-title">{props.product.name}</span>
                </div>
                <div className="card-content">
                    <p>{props.product.description}</p>
                </div>
                <div className="card-action">
                    <a href={'/controlroom/product/edit/' + props.product._id}> <i className="control-products-action material-icons">mode_edit</i></a>
                    <a href="#"> <i className="control-products-action material-icons">delete</i></a>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;