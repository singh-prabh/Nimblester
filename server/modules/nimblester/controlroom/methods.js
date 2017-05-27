import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
   'checkifadmin'({_id}) {
       return Roles.userIsInRole(_id, 'admin');
   }
});