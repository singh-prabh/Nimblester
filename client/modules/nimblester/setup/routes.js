import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import SetupContainer from './components/setup_container';

import Step1 from './components/steps/step1';

FlowRouter.route('/setup', {
    name: 'setup',
    action() {
        mount(SetupContainer, {
                main: <Step1/>,
    });
    },
});