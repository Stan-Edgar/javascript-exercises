function palindromes(word) {

   let final = [...word].filter(char => /[^\W_]/.test(char)).join('').toLowerCase();
   const strRev =  final.trim().split('').reverse().join('').toLowerCase();



console.log(final)

       if (strRev === final) {
           console.log("true")}
           else {
            console.log("false")
           };
       
   };
   
palindromes("Animal loots foliated detail of stool lamina");


// Do not edit below this line
module.exports = palindromes;
