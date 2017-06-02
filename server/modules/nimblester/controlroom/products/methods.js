import {Meteor} from 'meteor/meteor';
import {ProductsCollection} from '/imports/collections/nimblester/products';

Meteor.methods({
    'delete_product'({_id}) {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            ProductsCollection.remove({_id: _id})
        }
    },
    'new_product'({image, title, description, attributes, price, stock}) {
        if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
            return ProductsCollection.insert({
                name: title,
                description: description,
                image: image,
                attributes: attributes,
                price: price,
                stock: stock
            });
        }
    }
});