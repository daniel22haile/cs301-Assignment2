let prompt = require('prompt-sync')();
let totalBoxes = prompt("Enter the total boxes: ");
let boxInStack = prompt("Enter boxes in each stack");
let numStacks = parseInt(totalBoxes/boxInStack);

console.log(numStacks);