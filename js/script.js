

//**************** Constructor*************
var Library = function(){
};

//**************** Functions **************
Library.prototype.addBook = function (book) {
  console.log(book, "book in addBook");

  //Purpose: Add a book object to your books array.
  //Return:boolean true if it is not already added, false if it is already added
  if (noDups(book)){// noDups fuxn in util.js
    // window._bookShelf.push(book);
    // this._handleEventTrigger("searchEvent");

    $.ajax({
    url: window.libraryURL,
    dataType: 'json',
    method: 'POST',
    data: book,
    success: data => {
      console.log(data, "response data");
      var myBook = new Book(data);
      window._bookShelf.push(myBook);
      console.log(myBook, "myBook");
      // window._bookShelf.push(myBook);
      // console.log(myBook, "myBook");
      this._handleEventTrigger("searchEvent", window._bookShelf);
    }
  })
}
};

Library.prototype.removeBookByTitle = function (title) {
  //Purpose: Remove book from from the books array by its title.
  //Return:boolean true if the book(s) were removed, false if no books match
  var originalLength = window._bookShelf.length;
  for(var i = 0; i<window._bookShelf.length; i++){
    if (window._bookShelf[i].title === title) {
      console.log(window._bookShelf[i].title, " has been deleted");
    // if (window._bookShelf[i].title.indexOf(title) > -1) {
      window._bookShelf.splice(i,1);
      --i; // Correct the index value due to splice()
      this.saveBooks()
      this._handleEventTrigger('objUpdate');
    }
  }
  if (originalLength !== window._bookShelf.length) {
    return true;
  }
  return false;
};

Library.prototype.removeBookByAuthor = function (author) {
  //Remove a specific book from your books array by the author name.
  //Return: boolean true if the book(s) were removed, false if no books match
  // console.log(' made it to removeBookByAuthor fuxn');
  var originalLength = window._bookShelf.length;
  for(var i = 0; i < window._bookShelf.length; i++){
    if (window._bookShelf[i].author === author) {
    // if (window._bookShelf[i].author.indexOf(authorName >-1)) {
      window._bookShelf.splice(i,1);
      --i; // Correct the index value due to splice()
      this.saveBooks();
      // alert('The book was removed.');
      this._handleEventTrigger('objUpdate');
    }
  }
  if (originalLength != window._bookShelf.length) {
    // console.log (originalLength - window._bookShelf.length + " books by the author, " + authorName + ", were removed from the library.");
    return true;
  }
  return false;
};

Library.prototype.getRandomBook = function () {
  //Purpose: Return a random book object from your books array
  //Return: book object if you find a book, null if there are no books
  if (window._bookShelf.length == 0) {return null;}
  return (window._bookShelf[Math.floor(Math.random() * window._bookShelf.length)]);
};

Library.prototype.getBookByTitle = function (title) {
  //Purpose: Return all books that completely or partially matches the string title passed into the function
  //Return: array of book objects if you find books with matching titles, empty array if no books are found
  var booksbytitle = [];
  for(var i = 0; i<window._bookShelf.length; i++){
    // console.log(window._bookShelf, 'getBookByTitle');
    // if (window._bookShelf[i].title.search(title)>= -1) {
    if (window._bookShelf[i].title === title) {
      booksbytitle.push(window._bookShelf[i]);
    }
  }
  // if (booksbytitle.length == 0) {
  //   return ("There are no books by that title");
  // }
  return booksbytitle;
};

Library.prototype.getBooksByAuthor = function (authorName) {
//Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed
//to the function.
  var booksByAuthor = [];
  for(var i = 0; i<window._bookShelf.length; i++){
    // if (window._bookShelf[i].author.search(authorName>=0)){
    if (window._bookShelf[i].author === authorName) {
      booksByAuthor.push(window._bookShelf[i]);
    }
  }
  console.log(booksByAuthor);
  return booksByAuthor;
};

Library.prototype.addBooks = function (books) {
  //Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
  //Return: number number of books successfully added, 0 if no books were added
  // console.log("i am in addBooks");
  var originalLength = window._bookShelf.length;
  // console.log(typeof books);
  // console.log(books);
  if (Array.isArray(books)) {
    for (var i = 0; i < books.length; i++) {
        this.addBook(books[i]);
    }
  }
  // console.log('addBooks works');
  var numAddedBks = window._bookShelf.length - originalLength;
  // console.log(numAddedBks + " books were added to the library.");
  return (window._bookShelf, numAddedBks);
};

Library.prototype.getDistinctAuthors = function () {
  //Purpose: Find the distinct authors’ names from all books in your library
  //Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist
  var authors = [];
  for(var i = 0; i<window._bookShelf.length; i++){
    authors.push(window._bookShelf[i].author);
  }
  // console.log(authors);
  var uniqueAuthors = Array.from(new Set(authors));
  // console.log(uniqueAuthors, 'uniqueAuthors');
  return uniqueAuthors;
};

Library.prototype.getRandomAuthorNames = function () {
  //Purpose: Retrieves a random author name from your books collection
  //Return: string author name, null if no books exist
  if (window._bookShelf.length == 0) {return ("Null");}
  return this.getRandomBook().author;
};

//*******************Search Function*********************
//Purpose: Add a more robust search function to your app to allow you to filter by one or more book properties ○n the search function
//Return: an array of book instances
Library.prototype.search = function (string) {
  var result = (this.getBookByTitle(string)).concat(this.getBooksByAuthor(string));
  console.log(result, 'result');
  return result;
};

//************************ Creating event "" *****************************
Library.prototype._handleEventTrigger = function(sEvent, oData) {
 var oData = oData || {}; //sets oData to an empty object if it does not have data
 // console.log("oData")
 // console.log(oData);
 if (sEvent) {
   var event = new CustomEvent(sEvent, {"detail":oData});
   document.dispatchEvent(event);
   console.log(document.dispatchEvent(event), "dispatch");
 }
};
//*******************Local Storage**********************
//Stores data as strings - need to parse to convert back to objects when retrieve
//Purpose: Use localstorage and JSON.stringify to save the state of your library
// Library.prototype.saveBooks = function () {
//   // console.log(window._bookShelf, 'save books');
//   console.log("setting storage");
//   localStorage.setItem('books', JSON.stringify(window._bookShelf));
// };
//
// Library.prototype.retrieveBooks = function () {
//   var books = JSON.parse(localStorage.getItem('books'));
//   // console.log(books, 'booksStorage');
//   window._bookShelf = books || [];
//   return window._bookShelf;
// };

Library.prototype.retrieveBksDb = function (){
  var _self=this;
  $.ajax ({
    url: window.libraryURL,
    dataType:'json',
    method: 'GET',
    success: (data) => {
      // console.log(data, "data");
      window._bookShelf=bookify(data);
      // console.log('_bookShelf, retrieveBksDb');
      // console.log(window._bookShelf);
      // console.log("i am here");
      // this._handleEventTrigger('searchEvent',window._bookShelf);
      _self._handleEventTrigger('objUpdate');
    }
  })
};

//*******************Singleton****************************
//Purpose: Make your library a singleton
//Note: A prototyped book class should also be made, with each ‘book’ in your library being an instance of the book class.

// function Singleton() {
//     // instance stores as reference to Singleton
//     var instance;
//
//     // Singleton
//     window.Singleton = function() {  // Added window. during code reviews
//         return instance;
//     };
//
//     instance = this;
//
//     this._bookShelf = [];
//    };
