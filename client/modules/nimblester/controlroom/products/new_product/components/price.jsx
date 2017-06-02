import React from 'react';

const Price = () => {
    return (
        <div className="row">
            <div className="input-field col s6">
                <input id="price" type="number" className="validate" />
                    <label htmlFor="price">Price</label>
            </div>
            <div className="input-field col s6">
                <input type="checkbox" className="filled-in" id="taxable" />
                <label htmlFor="taxable">Taxable good</label>
            </div>
        </div>
    );
    };

    export default Price;