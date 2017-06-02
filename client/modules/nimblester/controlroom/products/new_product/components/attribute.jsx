import React, {Component} from 'react';
import $ from 'jquery';

class Attribute extends Component {
    constructor(props) {
        super(props);
        this.state = {inputs: [0]};
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <h5 className="attr-text">Attributes</h5>
                        <a onClick={ () => this.appendInput() }
                           className="btn-floating waves-effect waves-light red attr-text"><i
                            className="material-icons">add</i></a>
                    </div>
                </div>
                <div id="dynamicInput">
                    {this.state.inputs.map(input => <div key={input} className="row attribute-inputs">
                        <div className="col s5"><label htmlFor={'attr-name' + input}>Attribute name</label><input
                            id={'attr-name' + input} type="text" className="validate" /></div>
                        <div className="col s5"><label htmlFor={'attr-value' + input}>Attribute value</label><input
                            id={'attr-value' + input} type="text" className="validate" /></div>
                        <div className="col s2 delete-input-button">
                        <a onClick={ () => this.deleteInput(input) }
                           className="btn-floating waves-effect waves-light blue attr-tex"><i
                            className="material-icons">delete</i></a>
                        </div>
                    </div>)}
                </div>

            </div>
        );
    }

    appendInput() {
        let newInput = this.state.inputs.length;
        this.setState({inputs: this.state.inputs.concat([newInput])});
    }

    deleteInput(e) {
        let arr = this.state.inputs;
        delete arr[e];
        this.setState({inputs: arr});
    }

}

export default Attribute;