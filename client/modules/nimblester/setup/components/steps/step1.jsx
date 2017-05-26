import React, {Component} from 'react';
import $ from 'jquery';

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submitForm.bind(this);
    }

    componentDidMount() {
        $('select').material_select();
    }

    render() {
        return (
            <div className="row">
                <div className="col s5 offset-s4">
                    <div className="card">
                        <span className="card-title">Shop info</span>
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12">
                                    <form onSubmit={this.submit}>
                                        <div className="input-field">
                                            <input required="required" ref="shopname" id="shopname" type="text"
                                                   className="validate"/>
                                            <label htmlFor="shopname">Shop name</label>
                                        </div>
                                        <div className="input-field">
                                            <input required="required" ref="domain" id="domain" type="text"
                                                   className="validate"/>
                                            <label htmlFor="domain">Domain name</label>
                                        </div>
                                        <div className="input-field">
                                            <select required="required" ref="currency">
                                                <option value="" disabled selected>Choose your currency</option>
                                                <option value="EUR">EUR</option>
                                                <option value="USD">USD</option>
                                            </select>
                                            <label>Currency</label>
                                        </div>
                                        <button className="btn waves-effect waves-light" type="submit" name="action">
                                            Submit
                                            <i className="material-icons right">send</i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    submitForm(e) {
        e.preventDefault();
        console.log("submitted");
    }

}
export default Step1;