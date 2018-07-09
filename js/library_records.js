

//**************** Constructor*************
var Library = function(){
  this._booksInLibrary = new Array();
};

//**************** Functions **************
Library.prototype.addBook = function (book) {
  //Purpose: Add a book object to your books array.
  //Return:boolean true if it is not already added, false if it is already added
  for (var i = 0; i < this._booksInLibrary.length; i++) {
  //error debugging ********************************************
    // console.log('typeof this._booksInLibrary[i] is:', typeof(this._booksInLibrary[i]))
    // console.log('this.__booksInLibrary is:', this._booksInLibrary[i])
    // console.log('book is:', book);
    if (this._booksInLibrary[i].title.indexOf(book.title) >-1) {
  //***********************************************************
      return false;
    }
  }
    this._booksInLibrary.push((book));
      this.saveBooks();
      return true;
};

Library.prototype.removeBookByTitle = function (title) {
  //Purpose: Remove book from from the books array by its title.
  //Return:boolean true if the book(s) were removed, false if no books match
  var originalLength = this._booksInLibrary.length;
  for(var i = 0; i<this._booksInLibrary.length; i++){
    if (this._booksInLibrary[i].title.toLowerCase().indexOf(title) > -1) {
      this._booksInLibrary.splice(i,1);
      --i; // Correct the index value due to splice()
    }
  }
  if (originalLength != this._booksInLibrary.length) {
    this.saveBooks();
    return true;}
  return false;
};

Library.prototype.removeBookByAuthor = function (authorName) {
  //Remove a specific book from your books array by the author name.
  //Return: boolean true if the book(s) were removed, false if no books match
  var originalLength = this._booksInLibrary.length;
  for(var i = 0; i<this._booksInLibrary.length; i++){
    if (this._booksInLibrary[i].author.toLowerCase().indexOf(authorName.toLowerCase())>-1) {
      this._booksInLibrary.splice(i,1);
      --i; // Correct the index value due to splice()
    }
  }
  if (originalLength != this._booksInLibrary.length) {
    console.log (originalLength - this._booksInLibrary.length + " books by the author, " + authorName + ", were removed from the library.");
    this.saveBooks();
    return true;
  }
  return false;
};

Library.prototype.getRandomBook = function () {
  //Purpose: Return a random book object from your books array
  //Return: book object if you find a book, null if there are no books
  if (this._booksInLibrary.length == 0) {return null;}
  return (this._booksInLibrary[Math.floor(Math.random() * this._booksInLibrary.length)]);
};

Library.prototype.getBookByTitle = function (title) {
  //Purpose: Return all books that completely or partially matches the string title passed into the function
  //Return: array of book objects if you find books with matching titles, empty array if no books are found
  var booksbytitle = [];
  for(var i = 0; i<this._booksInLibrary.length; i++){
    if (this._booksInLibrary[i].title.toLowerCase().indexOf(title.toLowerCase())>-1) {
    // if (this._bookShelf[i].title === title) {
      booksbytitle.push(this._booksInLibrary[i]);
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
  for(var i = 0; i<this._booksInLibrary.length; i++){
    if (this._booksInLibrary[i].author.toLowerCase().indexOf(authorName.toLowerCase())>-1){
    // if (this._bookShelf[i].author === authorName) {

      booksByAuthor.push(this._booksInLibrary[i]);
    }
  }
  return booksByAuthor;
};

Library.prototype.addBooks = function (books) {
  //Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
  //Return: number number of books successfully added, 0 if no books were added
  if (Array.isArray(books)) {
    var originalLength = this._booksInLibrary.length;
    for (var i = 0; i < books.length; i++) {
      if (this.addBook(books[i])) {
      }
    }
  }
  return (this._booksInLibrary.length - originalLength + " books were added to the library.");
};

Library.prototype.getDistinctAuthors = function () {
  //Purpose: Find the distinct authors’ names from all books in your library
  //Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist
  var authors = [];
  for(var i = 0; i<this._booksInLibrary.length; i++){
    authors.push(this._booksInLibrary[i].author);
  }
  // console.log(authors);
  return new Set(authors);
};

Library.prototype.getRandomAuthorNames = function () {
  //Purpose: Retrieves a random author name from your books collection
  //Return: string author name, null if no books exist
  if (this._booksInLibrary.length == 0) {return ("Null");}
  return this.getRandomBook().author;
};

//*******************Local Storage**********************
//Stores data as strings - need to parse to convert back to objects when retrieve
//Purpose: Use localstorage and JSON.stringify to save the state of your library
Library.prototype.saveBooks = function () {
  console.log(this._booksInLibrary);
  localStorage.setItem('books', JSON.stringify(this._booksInLibrary));
}

Library.prototype.retrieveBooks = function () {
//loop through JSON array and get keys and values
//************** Not Working in Firefox*******************************
//not instantiating books as book objects in foreach loop or in for loop - works in Chrome
  var libraryBooks = [];
  var books = JSON.parse(localStorage.getItem('books'));
  //
  //Object.keys(books).forEach(function(key){
  //   console.log(key, books[key]);
  //   libraryBooks.push(new Book (key, books[key])); //this line not doing what I want it to
  // })
  for (var i = 0; i < books.length; i++) {
    libraryBooks.push(new Book(books[i].title,books[i].author,books[i].numberOfPages, books[i].pubDate));
    // console.log(libraryBooks);
  }
  return libraryBooks;
};

//*******************Search Function*********************
//Purpose: Add a more robust search function to your app to allow you to filter by one or more book properties ○n the search function
//Return: an array of book instances
Library.prototype.search = function () {
}

//*******************Singleton****************************
//Purpose: Make your library a singleton
//Note: A prototyped book class should also be made, with each ‘book’ in your library being an instance of the book class.

function Singleton() {
    // instance stores as reference to Singleton
    var instance;

    // Singleton
    window.Singleton = function() {  // Added window. during code reviews
        return instance;
    };

    instance = this;

    this._booksInLibrary = [];
   };

//*************** Create book as object ***********************
var Book = function(title, author, numberOfPages, publishDate){
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.publishDate = new Date(publishDate);
}
//************* Books to add to library **********************
//************* Use gLibrary.addBook(newBook) or .addBooks(newBooks) ***************************
var newBook = [
  new Book("Of Mice and Men", "John Steinbeck", 132, "2-25-1939"),
]
var newBooks = [
  new Book("Catcher in the Rye", "J.D. Salinger", 277, "7-16-1951"),
  new Book("The Undoing Project", "Michael Lewis", 368, "12-6-2016"),
  new Book("The Graveyard Book", "Neil Gaiman", 312, "9-30-2008"),
  new Book("The New New Thing", "Michael Lewis", 349, "10-17-1999"),
  new Book ("IT", "Stephen King", 1138, "9-15-1986"),
  new Book ("The Shining", "Stephen King", 447, "1-28-1977"),
  new Book ("The Big Four", "Agatha Christie", 282, "1-27-1927"),
  new Book ("A Thousand Acres", "Jane Smiley", 367, "10-23-1991"),
  new Book ("To Kill a Mockingbird", "Harper Lee", 281, "7-11-1960"),
  new Book ("The Shining", "Petra", 501, "9-28-1997"),//not adding as only unique titles included in library
  new Book ("Holden Reincarnated", "Collin Taylor", 104, "4-16-2001")
];

document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.gLibrary._booksInLibrary = gLibrary.retrieveBooks();
});
