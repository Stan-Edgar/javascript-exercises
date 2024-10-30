const date = new Date();

const people = [
    {
      name: 'Alexander the great',
      birthYear: 1896,
      deathYear: date.getFullYear(),
      
    },
    {
        name: 'Joey',
        birthYear: 1999,
        deathYear: date.getFullYear(),
        
    }
  ]

  

const findTheOldest = function(people) {

let numbers = [];


for (i = 0; people.length > i; i++) {

  let age = people[i].deathYear - people[i].birthYear; // Finds out age
  numbers.push(age) // push age into an array

};

for (i = 0; people.length > i; i++) {

  let age = people[i].deathYear - people[i].birthYear; 
  
  if (Math.max(...numbers) === age) {
  console.log(`${people[i].name}, ${Math.max(...numbers)}`) }; 
}
 

};




findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
