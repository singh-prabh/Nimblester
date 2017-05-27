import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import SetupContainer from './components/setup_container';

import Step1 from './components/steps/step1';
import Step2 from './components/steps/step2';

FlowRouter.route('/setup', {
    name: 'setup',
    action() {
        mount(SetupContainer, {
            main: <Step1/>,
        });
    },
});

FlowRouter.route('/setup/2', {
    name: 'setup2',
    action() {
        mount(SetupContainer, {
            main: <Step2/>,
        });
    },
});