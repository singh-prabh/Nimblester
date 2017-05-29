import React, {Component} from 'react';
import $ from 'jquery';
import {Meteor} from 'meteor/meteor';

class SideNav extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('.button-sidenav').sideNav();
    }

    render() {
        return (
        <nav>
            <ul id="slide-out" className="side-nav">
                <li className="sidenav-person"><a href="#"><i className="material-icons">perm_identity</i> Welcome {Meteor.user().profile.name}</a></li>
                <li><div className="divider"></div></li>
                <li><a href="/controlroom"><i className="material-icons">dashboard</i> Controlroom</a></li>
                <li><a href="/controlroom/sales"><i className="material-icons">loyalty</i> Sales</a></li>
                <li><a href="/controlroom/products"><i className="material-icons">redeem</i> Products</a></li>
                <li><a href="/controlroom/customers"><i className="material-icons">supervisor_account</i> Customers</a></li>
            </ul>
            <div className="nav-wrapper">
                <ul className="left">
                    <li> <a href="#" data-activates="slide-out" className="button-sidenav"><i
                        className="material-icons">menu</i></a></li>
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                </ul>
            </div>
        </nav>
        );
    }

}

export default SideNav;