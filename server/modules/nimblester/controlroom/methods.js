import {Meteor} from 'meteor/meteor';

Meteor.methods({
   'checkifadmin'({_id}) {
       return Roles.userIsInRole(_id, 'admin');
   }
});