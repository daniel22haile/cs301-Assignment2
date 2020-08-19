let prompt = require('prompt-sync')();
let distInMile = prompt("Enter value in killometer: ");
let distInKillometer = 0.621*parseFloat(distInMile);
console.log(distInKillometer);