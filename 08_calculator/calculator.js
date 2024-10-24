const add = function(num1, num2, ...args) {



  let result = num1 + num2 ;
  return result;
	
};



const subtract = function(num1, num2, ...args) {
	
  let result = num1 - num2 ;
  return result;
	
};



const sum = function(num1, num2) {
  let finalSum = []
  for (num1; num1 <= num2; num1++){
  
      finalSum.push(num1);
  }
  
  let Sum = 0;
  
  for (i = 0; i < finalSum.length; i++ ){
      Sum += finalSum[i];
  }

  return Sum;

};



const multiply = function(num1, num2) {
  let result = num1 * num2 ;
  return result;
	

};


const power = function(num1, num2) {
  let result = num1 ** num2;
  return result;
	
};



const factorial = function(num1) {
  //Creates an array that decreases the argument to 1.
    let finalFact = [];
    let origin = num1;
    for (i = 1; num1 > i; num1--){
      finalFact.push(num1);  
    };


    // ----------------------------------------------->

    let length = finalFact.length;


    for (i = 1; length > i ; i++){

      origin *= finalFact[i];
      
      console.log(origin);


    };

  };

factorial(10); 

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
