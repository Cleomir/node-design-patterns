const logger = require('./Logger');
const Shopper = require('./Shopper');
const Store = require('./Store');

logger.log('starting app...');

const cleomir = new Shopper('cleomir', 500);
const skiShop = new Store('Steep and Deep Supplies', [
  {
    item: 'Downhill Skis',
    qty: 5,
    price: 750
  },
  {
    item: 'Knit Hat',
    qty: 20,
    price: 5
  }
]);

logger.log('finished config...');

console.log(`${logger.count} logs total`);
logger.logs.forEach((log) => console.log(`${log.message}`));
