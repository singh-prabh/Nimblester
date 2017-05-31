import {Meteor} from 'meteor/meteor';
import {ProductsCollection} from '/imports/collections/nimblester/products';

Meteor.methods({
    'delete_product'({_id}) {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            ProductsCollection.remove({_id: _id})
        }
    },
    'new_product'({image, title, description}) {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            return ProductsCollection.insert({
                name: title,
                description: description,
                price: '10',
                image: image
            });
        }
    }
});