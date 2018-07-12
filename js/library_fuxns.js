

//**************** Constructor*************
var Library = function(){
  window.bookShelf= [];
};

//**************** Functions **************
Library.prototype.addBook = function (book) {
  //Purpose: Add a book object to your books array.
  //Return:boolean true if it is not already added, false if it is already added
  if (noDups(book)){// noDups fuxn in util.js
    window.bookShelf.push(book);
    console.log("addBook func");
    this.saveBooks();
    this._handleEventTrigger("objUpdate", {booksAdded: "The book is added."});
  }
  // var booksInLib = Array.from(new Set(authors));
  // console.log(booksInLib, 'booksInLib');
  //
  // return "No books!";    // return true;
};

Library.prototype.removeBookByTitle = function (title) {
  //Purpose: Remove book from from the books array by its title.
  //Return:boolean true if the book(s) were removed, false if no books match
  var originalLength = window.bookShelf.length;
  for(var i = 0; i<window.bookShelf.length; i++){
    if (window.bookShelf[i].title.toLowerCase().indexOf(title) > -1) {
      window.bookShelf.splice(i,1);
      --i; // Correct the index value due to splice()
    }
  }
  if (originalLength != window.bookShelf.length) {
    this.saveBooks();
    return true;}
  return false;
};

Library.prototype.removeBookByAuthor = function (authorName) {
  //Remove a specific book from your books array by the author name.
  //Return: boolean true if the book(s) were removed, false if no books match
  var originalLength = window.bookShelf.length;
  for(var i = 0; i<window.bookShelf.length; i++){
    if (window.bookShelf[i].author.toLowerCase().indexOf(authorName.toLowerCase())>-1) {
      window.bookShelf.splice(i,1);
      --i; // Correct the index value due to splice()
    }
  }
  if (originalLength != window.bookShelf.length) {
    console.log (originalLength - window.bookShelf.length + " books by the author, " + authorName + ", were removed from the library.");
    this.saveBooks();
    return true;
  }
  return false;
};

Library.prototype.getRandomBook = function () {
  //Purpose: Return a random book object from your books array
  //Return: book object if you find a book, null if there are no books
  if (window.bookShelf.length == 0) {return null;}
  return (window.bookShelf[Math.floor(Math.random() * window.bookShelf.length)]);
};

Library.prototype.getBookByTitle = function (title) {
  //Purpose: Return all books that completely or partially matches the string title passed into the function
  //Return: array of book objects if you find books with matching titles, empty array if no books are found
  var booksbytitle = [];
  for(var i = 0; i<window.bookShelf.length; i++){
    if (window.bookShelf[i].title.toLowerCase().indexOf(title.toLowerCase())>-1) {
    // if (window.bookShelf[i].title === title) {
      booksbytitle.push(window.bookShelf[i]);
    }
  }
  if (booksbytitle.length == 0) {
    return ("There are no books by that title");
  }
  return booksbytitle;
};

Library.prototype.getBooksByAuthor = function (authorName) {
//Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed
//to the function.
  var booksByAuthor = [];
  for(var i = 0; i<window.bookShelf.length; i++){
    if (window.bookShelf[i].author.toLowerCase().indexOf(authorName.toLowerCase())>-1){
    // if (window.bookShelf[i].author === authorName) {

      booksByAuthor.push(window.bookShelf[i]);
    }
  }
  return booksByAuthor;
};

Library.prototype.addBooks = function (books) {
  //Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
  //Return: number number of books successfully added, 0 if no books were added
  var originalLength = window.bookShelf.length;
  if (Array.isArray(books)) {
    for (var i = 0; i < books.length; i++) {
        this.addBook(books[i]);
    }
  }
  // console.log('addBooks works');
  var numAddedBks = window.bookShelf.length - originalLength;
  // console.log(numAddedBks + " books were added to the library.");
  return (window.bookShelf, numAddedBks);
};

Library.prototype.getDistinctAuthors = function () {
  //Purpose: Find the distinct authors’ names from all books in your library
  //Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist
  var authors = [];
  for(var i = 0; i<window.bookShelf.length; i++){
    authors.push(window.bookShelf[i].author);
  }
  // console.log(authors);
  var uniqueAuthors = Array.from(new Set(authors));
  console.log(uniqueAuthors, 'uniqueAuthors');
  return uniqueAuthors;
};

Library.prototype.getRandomAuthorNames = function () {
  //Purpose: Retrieves a random author name from your books collection
  //Return: string author name, null if no books exist
  if (window.bookShelf.length == 0) {return ("Null");}
  return this.getRandomBook().author;
};

//*******************Search Function*********************
//Purpose: Add a more robust search function to your app to allow you to filter by one or more book properties ○n the search function
//Return: an array of book instances
Library.prototype.search = function () {
  for (var i = 0; i < window.bookShelf.length; i++) {

  }
};

//************************ Creating event "" *****************************
Library.prototype._handleEventTrigger = function(sEvent, oData) {
 var oData = oData || {}; //sets oData to an empty object if it does not have data
 if (sEvent) {
   var event = new CustomEvent(sEvent, oData);
   document.dispatchEvent(event);
 }
};
//*******************Local Storage**********************
//Stores data as strings - need to parse to convert back to objects when retrieve
//Purpose: Use localstorage and JSON.stringify to save the state of your library
Library.prototype.saveBooks = function () {
  console.log(window.bookShelf, 'save books');
  localStorage.setItem('books', JSON.stringify(window.bookShelf));
};

Library.prototype.retrieveBooks = function () {
  var books = JSON.parse(localStorage.getItem('books'));
  console.log(books, 'booksStorage');
  window.bookShelf = books || [];
  return window.bookShelf;
};
//loop through JSON array and get keys and values
//************** Not Working in Firefox*******************************
//not instantiating books as book objects in foreach loop or in for loop - works in Chrome


//*************** Create book as object ***********************
//************** Use to read in for phase-two******************
// var Book = function(title, author, numberOfPages, publishDate){
//   this.title = title;
//   this.author = author;
//   this.numberOfPages = numberOfPages;
//   this.publishDate = new Date(publishDate).getUTCFullYear();
// };

// document.addEventListener("DOMContentLoaded", function() {
//   window.gLibrary = new Library();
//   window.gLibrary._bookShelf = gLibrary.retrieveBooks();
// });
