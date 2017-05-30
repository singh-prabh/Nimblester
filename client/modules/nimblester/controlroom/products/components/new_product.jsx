import React, {Component} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import $ from 'jquery';

class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {productImage: "https://placehold.it/350x350"};
    }

    componentDidMount() {
        $(".control-product-image-holder").mouseenter(function(){
            $(".overlay").fadeIn();
        });
        $(".control-product-image-holder").mouseleave(function(){
            $(".overlay").fadeOut();
        });

        $('.control-product-image-holder').on('click', () => {
            $('.control-product-img-input').click();
        });
    }

    render() {

        return (
            <div>
                <h4>Add a new product</h4>
                <div className="divider"></div>
                <div className="row">
                    <div className="col s5">
                        <h5>Product Image</h5>
                        <div className="control-product-image-holder">
                            <div className='overlay'><p><i className="medium material-icons">edit</i></p></div>
                            <img className="control-product-image" src={this.state.productImage}/>
                        </div>
                        <input onChange={this.handleUpload.bind(this)} type="file" className="control-product-img-input" />
                    </div>
                    <div className="col s7">
                        <div className="row">
                            <div className="col s12">
                                <h5>Product title</h5>
                                <div className="input-field">
                                    <input id="product-title" type="text" className="validate"/>
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

    handleUpload(image) {
        this.generatePreview(image);
        console.log(URL.createObjectURL(image.target.files[0]));
    }

    generatePreview(image) {
        //Some l33t hax to generate a preview
        this.setState({productImage: URL.createObjectURL(image.target.files[0])});
    }

}

export default NewProduct;