import {Meteor} from 'meteor/meteor';
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
    }
});