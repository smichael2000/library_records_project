

//**************** Constructor*************
var Library = function(){
};

//**************** Functions **************
Library.prototype.addBook = function (book) {
  // console.log(book, "book in addbook");

  if (noDups(book)){// noDups fuxn in util.js
    $.ajax({
    url: window.libraryURL,
    dataType: 'json',
    method: 'POST',
    data: book,
    success: data => {
      // console.log(data, "response data");
      var mybook = new book(data);
      window._bookShelf.push(mybook);
      // console.log(mybook, "mybook");
      this._handleEventTrigger("searchEvent", window._bookShelf);
    }
    })
  }
};

Library.prototype.removeBookByTitle = function (title) {
  //Purpose: Remove book from from the books array by its title.
  // console.log(title);
  var originalLength = window._bookShelf.length;
  for(var i = 0; i<window._bookShelf.length; i++){
    // console.log('inside for loop');
    // console.log(window._bookShelf[i].title);
    if (window._bookShelf[i].title === title) {
      // alert(window._bookShelf[i].title, + " has been deleted")
      var id = window._bookShelf[i]._id;
    // if (window._bookShelf[i].title.indexOf(title) > -1) {
      window._bookShelf.splice(i,1);
      // --i; // Correct the index value due to splice()
      // console.log(id);
      this._handleEventTrigger("objUpdate", window._bookShelf);
      this.deleteBook(id);
    }
  }
};

Library.prototype.removeBookByAuthor = function (author) {
  //Remove a specific book from your books array by the author name.
  //Return: boolean true if the book(s) were removed, false if no books match
  // console.log(' made it to removebookByAuthor fuxn');
  var originalLength = window._bookShelf.length;
  for(var i = 0; i < window._bookShelf.length; i++){
    if (window._bookShelf[i].author === author) {
    // if (window._bookShelf[i].author.indexOf(authorName >-1)) {
      var id = window._bookShelf[i]._id;
      window._bookShelf.splice(i,1);
      --i; // Correct the index value due to splice()
      this.deleteBook(id);
    }
  }
  if (originalLength != window._bookShelf.length) {
    // console.log (originalLength - window._bookShelf.length + " books by the author, " + authorName + ", were removed from the library.");
    // alert("All the books by " + window._bookShelf[i].author + " have been deleted")
    return true;
  } else {alert("There are no books by that author in the library.")}
  return false;
};

Library.prototype.getRandomBook = function () {
  //Purpose: Return a random book book from your books array
  //Return: book book if you find a book, null if there are no books
  if (window._bookShelf.length == 0) {return null;}
  var ranBk = window._bookShelf[Math.floor(Math.random() * window._bookShelf.length)]._id;
  // console.log(ranBk, 'randomBk');
  return ranBk;
};

Library.prototype.getBookByTitle = function (title) {
  //Purpose: Return all books that completely or partially matches the string title passed into the function
  //Return: array of book books if you find books with matching titles, empty array if no books are found
  var booksByTitle = [];
  for(var i = 0; i<window._bookShelf.length; i++){
    // if (window._bookShelf[i].title.search(title)>= -1) {
    if (window._bookShelf[i].title === title) {
      // console.log(window._bookShelf[i].title, 'getbookByTitle');
      booksByTitle.push(window._bookShelf[i]);
    }
  }

  console.log(booksByTitle);
  return booksByTitle;
};

Library.prototype.getOneBookByTitle = function (title) {
  //Purpose: Return all books that completely or partially matches the string title passed into the function
  //Return: array of book books if you find books with matching titles, empty array if no books are found
  var booksByTitle = {};
  for(var i = 0; i<window._bookShelf.length; i++){
    // if (window._bookShelf[i].title.search(title)>= -1) {
    if (window._bookShelf[i].title === title) {
      // console.log(window._bookShelf[i].title, 'getOnebookByTitle');
      booksByTitle = window._bookShelf[i];
    }
  }
  console.log(booksByTitle);
  return booksByTitle;
};

Library.prototype.getBooksByAuthor = function (authorName) {
//Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed
//to the function.
  var booksByAuthor = [];
  for(var i = 0; i<window._bookShelf.length; i++){
    // if (window._bookShelf[i].author.search(authorName>=0)){
    if (window._bookShelf[i].author === authorName) {
      // console.log(window._bookShelf[i]);
      booksByAuthor.push(window._bookShelf[i]);
    }
  }

  // if (booksByAuthor.length <= 0) {
  //   console.log("There are no books by " + authorName);
  //
  // }
  // console.log(booksByAuthor);
  return booksByAuthor;
};

Library.prototype.addBooks = function (books) {
  //Purpose: Takes multiple books, in the form of an array of book books, and adds the books to your books array.
  //Return: number number of books successfully added, 0 if no books were added
  // console.log("i am in addbooks");
  var originalLength = window._bookShelf.length;
  // console.log(typeof books);
  // console.log(books);
  if (Array.isArray(books)) {
    for (var i = 0; i < books.length; i++) {
        this.addbook(books[i]);
    }
  }
  // console.log('addbooks works');
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
  return this.getRandomBook();
};

Library.prototype.getBkById = function (id) {
    var randombook = $.ajax({
        url: window.libraryURL + '/' + id,
        dataType: "json",
        method: 'GET',
        // data: id,
        success: data => {
        console.log(data, "response data")
        // var book = new book(data);
        // console.log(book, 'book in getBkById');
        return;
        }
    })
    return randombook;
  };

// Library.prototype.updateBook = function (book) {
//   $.ajax({
//   url: window.libraryURL,
//   dataType: 'json',
//   method: 'PUT',
//   data: book,
//   success: data => {
//     console.log(data, "response data");
//     // this._handleEventTrigger('objUpdate')
//     }
//   })
// };

Library.prototype.updateEditedBook = function (book) {
  console.log("in updateEDITEDbook");
  console.log(book);
  $.ajax({
  url: window.libraryURL + book._id,
  dataType: 'json',
  method: 'PUT',
  data: book,
  success: data => {
    console.log(data, "response data");
    this.retrieveBksDb()
    //this._handleEventTrigger('objUpdate')
    }
  })
};

Library.prototype.deleteBook = function (id) {
    // console.log('inside deletebook');
    $.ajax({
        url: window.libraryURL + "/" + id,
        dataType: "text",
        method: 'DELETE',
        data: id,
        success: data => {
          // console.log(data, "response data");
          this._handleEventTrigger("searchEvent", window._bookShelf);
        }
    })
  };



//*******************Search Function*********************
//Purpose: Add a more robust search function to your app to allow you to filter by one or more book properties ○n the search function
//Return: an array of book instances
Library.prototype.search = function (string) {
  var result = (this.getBookByTitle(string)).concat(this.getBooksByAuthor(string));
  // console.log(result, 'result');
  return result;
};

//************************ Creating event "" *****************************
Library.prototype._handleEventTrigger = function(sEvent, oData) {
 var oData = oData || {}; //sets oData to an empty book if it does not have data
 // console.log("oData")
 // console.log(oData);
 if (sEvent) {
   var event = new CustomEvent(sEvent, {"detail":oData});
   document.dispatchEvent(event);
   // console.log(document.dispatchEvent(event), "dispatch");
 }
};
//*******************Local Storage**********************
//Stores data as strings - need to parse to convert back to books when retrieve
//Purpose: Use localstorage and JSON.stringify to save the state of your library
// Library.prototype.savebooks = function () {
//   // console.log(window._bookShelf, 'save books');
//   console.log("setting storage");
//   localStorage.setItem('books', JSON.stringify(window._bookShelf));
// };
//
// Library.prototype.retrievebooks = function () {
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
      _self._handleEventTrigger('searchEvent',window._bookShelf);
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
