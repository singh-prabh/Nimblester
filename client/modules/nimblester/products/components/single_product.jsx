import React from 'react';

const SingleProduct = (props) => {
    return (
        <div className="col s3">
            <div className="card">
                <div className="card-image">
                    <img src={props.product.image}/>
                    <span className="card-title">{props.product.title}</span>
                </div>
                <div className="card-content">
                    <p>{props.product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;