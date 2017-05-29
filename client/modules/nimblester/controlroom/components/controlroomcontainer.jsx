import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

import Login from './login';
import SideNav from './sidenav';

class ControlRoomContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {loggedin: false, ready: false};
    }

    componentWillMount() {
        if (Meteor.userId()) {
            Meteor.call('checkifadmin', {_id: Meteor.userId()}, (error, results) => {
                if (results) {
                    this.setState({loggedin: true, ready: true});
                }
            });
        } else {
            this.setState({ready: true});
        }
    }

    render() {
        if (!this.state.ready) {
            return (
                <div className="container">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        if (!this.state.loggedin) {
            return (
                <div className="container control-login">
                    <Login/>
                </div>
            )
        } else {
            return (
                <div>
                    <SideNav/>
                    <div className="container">
                        <a className="btn-floating btn-large waves-effect waves-light red sidetoggle" data-activates="slide-out"><i className="material-icons">menu</i></a>
                        {this.props.main}
                    </div>
                </div>
            );
        }
    }

}

export default ControlRoomContainer;