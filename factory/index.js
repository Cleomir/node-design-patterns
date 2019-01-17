const userFactory = require('./user-factory');

const cleomir = userFactory('Cleomir Machado Gomes', 100);
const eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');

eve.payDay(100);

console.log(cleomir.toString());
console.log(eve.toString());
