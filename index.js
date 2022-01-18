//let totalBatteries = 0;
const totalBatteries = [4, 5, 3, 4, 4, 6, 5].reduce(function(accumulator, element){return element + accumulator});
//totalBatteries += batteryBatches;

console.log(totalBatteries);
