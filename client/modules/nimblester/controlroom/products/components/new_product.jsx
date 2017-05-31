import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {stateToHTML} from 'draft-js-export-html';
import $ from 'jquery';

class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {productImage: "https://placehold.it/350x350", editorState: ''};
    }

    componentDidMount() {
        $(".control-product-image-holder").mouseenter(function () {
            $(".overlay").fadeIn();
        });
        $(".control-product-image-holder").mouseleave(function () {
            $(".overlay").fadeOut();
        });

        $('.control-product-image-holder').on('click', () => {
            $('.control-product-img-input').click();
        });
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col s9">
                        <h4>Add a new product</h4>
                    </div>
                    <div className="col s3">
                        <button onClick={this.saveProduct.bind(this)}
                                className="btn waves-effect waves-light save-product-button" name="action">
                            Save
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col s5">
                        <h5>Product Image</h5>
                        <div className="control-product-image-holder">
                            <div className='overlay'><p><i className="medium material-icons">edit</i></p></div>
                            <img className="control-product-image" src={this.state.productImage}/>
                        </div>
                        <input id="product-image" onChange={this.handleUpload.bind(this)} type="file"
                               className="control-product-img-input"/>
                    </div>
                    <div className="col s7">
                        <div className="row">
                            <div className="col s12">
                                <h5>Product title</h5>
                                <div className="input-field">
                                    <input ref="productTitle" id="product-title" type="text" className="validate"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <h5>Product description</h5>
                                <Editor
                                    onEditorStateChange={ this.handleEditorChange.bind(this) }
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

    handleUpload(image) {
        this.getBase64();

    }

    getBase64() {
        const filesSelected = document.getElementById("product-image").files;

        if (filesSelected.length > 0) {
            const fileToLoad = filesSelected[0];

            const fileReader = new FileReader();

            fileReader.addEventListener('load', (fileLoadedEvent) => {
                this.setState({productImage: fileLoadedEvent.target.result});
            });


            fileReader.readAsDataURL(fileToLoad);
        }
    }

    handleEditorChange(contentState) {
        this.setState({editorState: stateToHTML(contentState.getCurrentContent())});
    }

    saveProduct() {
        if (!$.trim(this.refs.productTitle.value)) {
            Materialize.toast('Title not set', 4000);
        } else {
            Meteor.call('new_product', {image: this.state.productImage, title: this.refs.productTitle.value, description: this.state.editorState});
        }
    }


}

export default NewProduct;