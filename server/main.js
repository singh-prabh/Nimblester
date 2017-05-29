import {Meteor} from 'meteor/meteor';
import {ProductsCollection} from '/imports/collections/nimblester/products';
Meteor.startup(() => {
    ProductsCollection.insert({
        name: 'testproduct',
        description: 'lorum ipsum solor idor',
        price: '10',
        image: 'https://placehold.it/350x350'
    });
});