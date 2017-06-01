import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import ControlRoomContainer from './../../components/controlroomcontainer';
import EditProduct from './components/edit_product';

FlowRouter.route('/controlroom/product/edit/:id', {
    name: 'controlroom edit products',
    action(params, queryParams) {
        mount(ControlRoomContainer, {
            main: <EditProduct productId={params.id} />,
        });
    },
});
