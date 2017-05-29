import {Meteor} from 'meteor/meteor';
import {ProductsCollection} from '/imports/collections/nimblester/products';

Meteor.publish('products', () => {
   return ProductsCollection.find({});
});