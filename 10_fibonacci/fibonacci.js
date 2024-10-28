const fibonacci = function(num) {

let def = [0, 1];

let first = def[def.length - 1];
let second = def[def.length -2];


for (i = 0; num > i; i++) {


    let first = def[def.length - 1];
    let second = def[def.length -2];

let result = first + second;
def.push(result);


}

console.log(def[num])

};

fibonacci(6);



// Do not edit below this line
module.exports = fibonacci;
