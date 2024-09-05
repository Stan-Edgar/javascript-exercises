const sumAll = function(num1, num2) {

// Adds numbers to an array
    let finalSum = []
for (num1; num1 <= num2; num1++){

    finalSum.push(num1);
}

let sum = 0;

for (i = 0; i < finalSum.length; i++ ){
    sum += finalSum[i];
}


console.log(sum);


};

console.log(sumAll(1, 4));

// get numbers
// make a variable to contain


// Do not edit below this line
module.exports = sumAll;
