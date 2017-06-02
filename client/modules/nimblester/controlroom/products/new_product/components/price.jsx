import React, {Component} from 'react';

class Price extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <h5 className="attr-text">Price</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s5">
                        <input id="price" ref="price" type="number" className="validate"/>
                        <label htmlFor="price">Price</label>
                    </div>
                    <div className="input-field col s5">
                        <input type="checkbox" ref="taxable" className="filled-in" id="taxable"/>
                        <label htmlFor="taxable">Taxable good</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Price;