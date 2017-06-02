import React, {Component} from 'react';

class Stock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <h5 className="attr-text">Stock</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s5">
                        <input id="quantity" ref="quantity" type="number" className="validate"/>
                        <label htmlFor="quantity">Quantity</label>
                    </div>
                    <div className="input-field col s5">
                        <input type="checkbox" ref="instock" className="filled-in" id="instock"/>
                        <label htmlFor="instock">In stock</label>
                    </div>
                </div>
            </div>
        );
    }

}

export default Stock;