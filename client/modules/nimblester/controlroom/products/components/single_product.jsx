import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

class SingleProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col s3">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.product.image}/>
                        <span className="card-title">{this.props.product.name}</span>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: this.props.product.description.substr(0, 100)}} className="card-content">
                    </div>
                    <div className="card-action">
                        <a href={'/controlroom/product/edit/' + this.props.product._id}> <i
                            className="control-products-action material-icons">mode_edit</i></a>
                        <i onClick={this.deleteProduct.bind(this, this.props.product._id)} className="control-products-action material-icons">delete</i>
                    </div>
                </div>
            </div>
        );
    }

    deleteProduct(productId) {
        if (confirm("Are you sure you want to delete this product?")) {
            Meteor.call('delete_product', {_id: productId}, (err, res) => {
                if (err) {
                    Materialize.toast(err, 4000);
                }
            })
        }
    }

}

export default SingleProduct;