import React, {Component} from 'react'
import $ from 'jquery';

import Attribute from './attribute';
import Price from './price';
import Stock from './stock';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('ul.tabs').tabs();
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="col s12">
                            <ul className="tabs">
                                <li className="tab col s3"><a href="#attributes">Attributes</a></li>
                                <li className="tab col s3"><a href="#price">Price</a></li>
                                <li className="tab col s3"><a href="#stock">Stock</a></li>
                                <li className="tab col s3"><a href="#test4">Category</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div id="attributes" className="col s12"><Attribute/></div>
                        <div id="price" className="col s12"><Price ref="price"/></div>
                        <div id="stock" className="col s12"><Stock ref="stock"/></div>
                        <div id="test4" className="col s12">Category</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductDetail;