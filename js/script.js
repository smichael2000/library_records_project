
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
      var mybook = new Book(data);
      window._bookShelf.push(mybook);
      // console.log(mybook, "mybook");
      this._handleEventTrigger("searchEvent", window._bookShelf);
    }
    })
  }
};

//remove book by title/author from database
Library.prototype.removeBookByTitleOrAuthor = function (string) {
  $.ajax({
      url: window.libraryURL + "removeBk/" + string,
      dataType: "text",
      method: 'DELETE',
      success: data => {
        console.log(data, "response data");
        this.retrieveBksDb()
      }
  })
};


Library.prototype.getRandomBook = function () {
  //Purpose: Return a random book book from your books array
  //Return: book book if you find a book, null if there are no books
  // if (window._bookShelf.length == 0) {return null;}
  // var ranBk = window._bookShelf[Math.floor(Math.random() * window._bookShelf.length)]._id;
  // // console.log(ranBk, 'randomBk');
  // return ranBk;
  var randomBook = $.ajax({
      url: window.libraryURL + 'randomBk/',
      dataType: "json",
      method: 'GET',
      success: data => {
      console.log(data, "response data")
      return;
      }
  });
  return randomBook;
};

Library.prototype.getRandomAuthorNames = function () {
  //Purpose: Retrieves a random author name from your books collection
  //Return: string author name, null if no books exist
  if (window._bookShelf.length == 0) {return ("Null");}
  return this.getRandomBook();
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
  // console.log(booksByTitle);
  return booksByTitle;
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
        this.addBook(books[i]);
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

// Needed for Edit Feature in dataTable.js
//Purpose: modifies a book by title or author
//Return: modified book update to table
Library.prototype.updateEditedBook = function (book) {
  // console.log("in updateEDITEDbook");
  // console.log(book);
  $.ajax({
  url: window.libraryURL + book._id,
  dataType: 'json',
  method: 'PUT',
  data: book,
  success: data => {
    console.log(data, "response data");
    this.retrieveBksDb()
    }
  })
};

//Needed for Delete Feature in dataTableUI.js
//Purpose: deletes book by clicking on desried row (dataTableUI.js)
//Return: update _bookShelf after deleting book
Library.prototype.deleteBook = function (id) {
    // console.log('inside deletebook');
    $.ajax({
        url: window.libraryURL + id,
        dataType: "text",
        method: 'DELETE',
        data: id,
        success: data => {
          // console.log(data, "response data");
          this._handleEventTrigger("searchEvent", window._bookShelf);
        }
    })
  };

//Needed for searchUI.js
//Purpose: partial/total searches by title or author
//Returns: search results
Library.prototype.search = function (string) {
$.ajax ({
    url: window.libraryURL + "search/" + string,
    dataType: 'json',
    type: 'GET',
    success:(data) => {
      var searchResult = bookify(data);
      console.log(searchResult);
      this._handleEventTrigger('searchEvent', searchResult);
    }
  })
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

//Gets entire _bookShelf
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
