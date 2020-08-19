let prompt = require('prompt-sync')();
let volInLiter = prompt("Enter value in quart: ");
let volInquart = 0.946 * parseInt(volInLiter);
console.log(volInquart);