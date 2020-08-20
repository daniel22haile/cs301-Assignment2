let prompt = require('prompt-sync')();
let distInMile = prompt("Enter value in killometer: ");
distInMile = parseInt(distInMile);
let distInKillometer = parseFloat(distInMile)*0.621;
console.log(distInKillometer);