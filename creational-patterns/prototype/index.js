const scoutPrototype = require('./scout-prototype');

const cleomir = scoutPrototype.clone();
cleomir.name = 'Cleomir Machado Gomes';
cleomir.addItemToList('slingshot');

const eve = scoutPrototype.clone();
eve.name = 'Eve Porcello';
eve.addItemToList('reading light');

console.log(`${cleomir.name}: ${cleomir.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
