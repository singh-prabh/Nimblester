import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import $ from 'jquery';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submitForm.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col s5 offset-s4">
                    <h5 className="center-align setup-title">Create new user</h5>
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="col s12">
                                    <form onSubmit={this.submit}>
                                        <div className="input-field">
                                            <input required="required" ref="name" id="name" type="text"
                                                   className="validate"/>
                                            <label htmlFor="name">Name</label>
                                        </div>
                                        <div className="input-field">
                                            <input required="required" ref="email" id="email" type="email"
                                                   className="validate"/>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field">
                                            <input required="required" ref="password" id="password" type="password"
                                                   className="validate"/>
                                            <label htmlFor="password">Password</label>
                                        </div>
                                        <div className="input-field">
                                            <input required="required" ref="password2" id="password2" type="password"
                                                   className="validate"/>
                                            <label htmlFor="password2">Confirm your password</label>
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
        );
    }

    submitForm(e) {
        e.preventDefault();
        if (this.refs.password.value === this.refs.password2.value) {
            Meteor.call('insert_newadmin', {
                name: this.refs.name.value,
                email: this.refs.email.value,
                password: this.refs.password.value
            }, (err, res) => {
                if (err) {
                    Materialize.toast(err, 4000);
                } else {
                    FlowRouter.go('/controlroom');
                }
            });
        } else {
            Materialize.toast("Passwords are not the same", 4000);
        }
    }

}

export default Step2;