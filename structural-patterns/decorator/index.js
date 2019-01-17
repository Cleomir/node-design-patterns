const Shopper = require('./Shopper');
const {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem');

const alex = new Shopper('Alex', 100);

const walkman = new InventoryItem('Walkman', 29.99);
const necklace = new InventoryItem('Necklace', 9.99);

const goldNecklace = new GoldenInventoryItem(necklace);
const diamondGoldNecklace = new GoldenInventoryItem(goldNecklace);

const diamondWalkman = new DiamondInventoryItem(walkman);

alex.purchase(diamondGoldNecklace);
alex.purchase(diamondWalkman);

alex.printStatus();
diamondWalkman.print();
