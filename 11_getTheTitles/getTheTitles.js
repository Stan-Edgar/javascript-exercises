const books = [
  {
    title: 'Deep Work',
    author: 'Call Newport'
  },
  {
    title: 'Boron Letters',
    author: 'Gary Halbert'
  }
]


const getTheTitles = function(books) {

for (i = 0; books.length > i; i++) {
  console.log(books[i].title);
}

};

getTheTitles(books);



// Do not edit below this line
module.exports = getTheTitles;
