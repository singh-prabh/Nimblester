import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

import {NimbleConfigData} from '/imports/collections/nimblester/nimble_config_data';

Meteor.methods({
    'insert_shopinfo'({domain, shopname, currency}) {
        NimbleConfigData.rawCollection().insertMany([{
            key: "domain_name",
            value: domain
        }, {
            key: "shopname",
            value: shopname
        }, {
            key: "currency",
            value: currency
        }]);

        NimbleConfigData.rawCollection().createIndex({"key": 1}, {unique: true})
    },

    'insert_newadmin'({name, email, password}) {
        const new_id = Accounts.createUser({
            email: email,
            password: password,
            profile: {
                name: name
            }
        });
        Roles.addUsersToRoles(new_id, 'admin');
    }
});