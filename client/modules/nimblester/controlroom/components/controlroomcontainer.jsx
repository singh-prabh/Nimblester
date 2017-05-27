import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

import Login from './login';

class ControlRoomContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {loggedin: false};
    }

    componentWillMount() {
        if (Meteor.userId()) {
            this.setState({loggedin: true});
        }
    }

    render() {
        if (!this.state.loggedin) {
            return (
                <div className="container">
                    <Login/>
                </div>
            )
        } else {
            return (
                <div className="container">
                    {this.props.main}
                </div>
            );
        }
    }

}

export default ControlRoomContainer;