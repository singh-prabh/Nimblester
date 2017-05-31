import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import ControlRoomContainer from './../components/controlroomcontainer';
import ProductsContainer from './components/products_container';
import NewProduct from './new_product/components/new_product';
import EditProduct from './edit_product/components/edit_product';

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

FlowRouter.route('/controlroom/product/edit/:id', {
    name: 'controlroom edit products',
    action(params, queryParams) {
        mount(ControlRoomContainer, {
            main: <EditProduct productId={params.id} />,
        });
    },
});