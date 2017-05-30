import React, {Component} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class NewProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>Add a new product</h4>
                <div className="divider"></div>
                <div className="row">
                    <div className="col s5">
                        image upload right here
                    </div>
                    <div className="col s7">
                        <div className="row">
                            <div className="col s12">
                                <div className="input-field">
                                    <input id="product-title" type="text" className="validate"/>
                                    <label htmlFor="product-title">Product Title</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h5>Product description</h5>
                                <Editor
                                    toolbarClassName="home-toolbar"
                                    wrapperClassName="home-wrapper"
                                    editorClassName="home-editor"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default NewProduct;