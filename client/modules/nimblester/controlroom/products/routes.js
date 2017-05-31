import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import ControlRoomContainer from './../components/controlroomcontainer';
import ProductsContainer from './components/products_container';
import NewProduct from './components/new_product';

FlowRouter.route('/controlroom/products', {
    name: 'controlroom products',
    action() {
        mount(ControlRoomContainer, {
            main: <ProductsContainer/>,
        });
    },
});

FlowRouter.route('/controlroom/product/new', {
    name: 'controlroom new product',
    action() {
        mount(ControlRoomContainer, {
            main: <NewProduct/>,
        });
    },
});