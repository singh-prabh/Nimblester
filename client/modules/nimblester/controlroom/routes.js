import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import ControlRoomContainer from './components/controlroomcontainer';
import ControlHome from './components/controlhome';

FlowRouter.route('/controlroom', {
    name: 'controlroom',
    action() {
        mount(ControlRoomContainer, {
            main: <ControlHome/>,
        });
    },
});
