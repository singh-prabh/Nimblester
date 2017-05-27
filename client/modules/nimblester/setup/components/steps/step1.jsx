import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
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
                    <h5 className="center-align setup-title">Shop info</h5>
                    <div className="card">
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
                                            <select defaultValue="" required="required" ref="currency">
                                                <option value="" disabled>Choose your currency</option>
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
        Meteor.call('insert_shopinfo', {
            domain: this.refs.domain.value,
            shopname: this.refs.shopname.value,
            currency: this.refs.currency.value
        }, (err, res) => {
            if (err) {
                Materialize.toast(err, 4000)
            } else {
                FlowRouter.go('/setup/2');
            }
        });
    }
}
export default Step1;