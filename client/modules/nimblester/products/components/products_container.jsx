import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import _ from 'lodash';

import {ProductsCollection} from '/imports/collections/nimblester/products';
import SingleProduct from './single_product';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const rows = [...Array( Math.ceil(this.props.products.length / 4) )];

        const productRows = rows.map( (row, idx) => this.props.products.slice(idx * 4, idx * 4 + 4) );

        const content = productRows.map((row, idx) => (
            <div className="row" key={idx}>
                { row.map( product => <SingleProduct key={product._id} product={product} /> )}
            </div> )
        );

        return (
            <div>
                <h4>All products</h4>
                <div className="divider"></div>
                {content}
            </div>
        );
    }

    ShowAllProducts() {

    }
}

export default ProductsContainer = createContainer(props => {
    Meteor.subscribe('products');

    return {
        products: ProductsCollection.find({}).fetch()
    };
}, ProductsContainer);