import React, {Component} from 'react';
import $ from 'jquery';

class Attribute extends Component {
    constructor(props) {
        super(props);
        this.state = {inputs: ['input-0']};
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <h5 className="attr-text">Attributes</h5>
                        <a onClick={ () => this.appendInput() } className="btn-floating btn-large waves-effect waves-light red attr-text attr-button"><i className="material-icons">add</i></a>
                        <div className="divider"></div>
                    </div>
                </div>
                <div id="dynamicInput">
                    {this.state.inputs.map(input => <div className="row">
                        <div className="col s6"><label htmlFor="attribute-name">Attribute name</label><input
                            id="attribute-name" type="text" key={Math.random()}/></div>
                        <div className="col s6"><label htmlFor="attribute-value">Attribute value</label><input
                            id="attribute-value" type="text" key={Math.random()}/></div>
                    </div>)}
                </div>

            </div>
        );
    }

    appendInput() {
        let newInput = `input-${this.state.inputs.length}`;
        this.setState({inputs: this.state.inputs.concat([newInput])});
    }

}

export default Attribute;