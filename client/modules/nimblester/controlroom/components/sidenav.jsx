import React, {Component} from 'react';
import $ from 'jquery';

class SideNav extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    $('.sidetoggle').sideNav();
    }

    render() {
        return (
            <ul id="slide-out" className="side-nav">

            </ul>
        );
    }

}

export default SideNav;