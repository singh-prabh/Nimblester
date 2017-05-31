import React, {Component} from 'react'

import Attribute from './attribute';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <Attribute/>
                    </div>
                </div>
            </div>
        );
    }

}

export default ProductDetail;