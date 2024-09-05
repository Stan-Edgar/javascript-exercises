const reverseString = function(string) {
    let text = string.split();
    text.reverse();
    let Finish = text.toString();
    
    
    
    return Finish;
    
    };
    
    console.log(reverseString("john")); 

// Do not edit below this line
module.exports = reverseString;
