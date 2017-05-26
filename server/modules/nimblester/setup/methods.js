import {Meteor} from 'meteor/meteor';
import {ShopInfo} from '/imports/collections/nimblester/shopinfo';

Meteor.methods({
    'insert_shopinfo'({domain, shopname, currency}) {
        ShopInfo.insert({
            domain: domain,
            shopname: shopname,
            currency: currency
        });
    }
});