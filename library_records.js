var Library = function(){
  this._bookShelf = new Array();
};


Library.prototype.addBook = function (book) {
  //Purpose: Add a book object to your books array.
  //Return:boolean true if it is not already added, false if it is already added
  for (var i = 0; i < this._bookShelf.length; i++) {
  //error debugging ********************************************
    // console.log('typeof this._bookShelf[i] is:', typeof(this._bookShelf[i]))
    // console.log('this._bookShelf[i] is:', this._bookShelf[i])
    // console.log('book is:', book);
    if (this._bookShelf[i].title.indexOf(book)>-1) {
  //***********************************************************
    // if (this._bookShelf[i] ===book){
      return false;
    }
  }
  return this._bookShelf.push(book);
};

Library.prototype.removeBookByTitle = function (title) {
  //Purpose: Remove book from from the books array by its title.
  //Return:boolean true if the book(s) were removed, false if no books match
  var originalLength = this._bookShelf.length;
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].title.indexOf(title) > -1) {
      this._bookShelf.splice(i,1);
      --i; // Correct the index value due to splice()
    }
  }
  if (originalLength != this._bookShelf.length) {
    console.log (originalLength - this._bookShelf.length + " books with the title, " + title + ", were removed from the library.");
    return true;}
  else {return false;}
};

Library.prototype.removeBookByAuthor = function (authorName) {
  //Remove a specific book from your books array by the author name.
  //Return: boolean true if the book(s) were removed, false if no books match
  var originalLength = this._bookShelf.length;
  //Removes all books by specific author
  //Need to figure out iterator ******************************************
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].author.indexOf(authorName)>-1) {
      this._bookShelf.splice(i,1);
      --i; // Correct the index value due to splice()
    }
  }
  if (originalLength != this._bookShelf.length) {return true;}
  else {return false;}
};

Library.prototype.getRandomBook = function () {
  //Purpose: Return a random book object from your books array
  //Return: book object if you find a book, null if there are no books
  // var rand = this._bookShelf[Math.floor(Math.random() * this._bookShelf.length)];
  return (this._bookShelf[Math.floor(Math.random() * this._bookShelf.length)]);
};

Library.prototype.getBookByTitle = function (title) {
  //Purpose: Return all books that completely or partially matches the string title passed into the function
  //Return: array of book objects if you find books with matching titles, empty array if no books are found
  var booksbytitle = [];
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].title.indexOf(title)>-1) {
    // if (this._bookShelf[i].title === title) {
      booksbytitle.push(this._bookShelf[i]);
    }
  }
  if (booksbytitle.length == 0) {
    return ("There are no books by that title");
  }
  else {
    console.log("There are " + booksbytitle.length + " books with the title, " + title + ": ")
    return booksbytitle;
  }
};

Library.prototype.getBooksByAuthor = function (authorName) {
//Purpose: Finds all books where the author’s name partially or completely matches the authorName argument passed
//to the function.
  var booksByAuthor = [];
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].author.indexOf(authorName)>-1){
    // if (this._bookShelf[i].author === authorName) {

      booksByAuthor.push(this._bookShelf[i].title);
    }
  }
  return ("The library has the following books by " + authorName +": " + booksByAuthor);

};

Library.prototype.addBooks = function (book) {
  //Purpose: Takes multiple books, in the form of an array of book objects, and adds the objects to your books array.
  //Return: number number of books successfully added, 0 if no books were added
  if (Array.isArray(newBooks)) {
    var addedBooks = 0;
    for (var i = 0; i < newBooks.length; i++) {
      if (this.addBook(newBooks[i])) {
        addedBooks ++;
      }
    }
  }
  // console.log(this._bookShelf);
  return (addedBooks + " books were added to the library.");
};

Library.prototype.getDistinctAuthors = function () {
  //Purpose: Find the distinct authors’ names from all books in your library
  //Return: array of strings the names of all distinct authors, empty array if no books exist or if no authors exist
  var authors = [];
  for(var i = 0; i<this._bookShelf.length; i++){
    authors.push(this._bookShelf[i].author);
  }
  // console.log(authors);
  return new Set(authors);
};

Library.prototype.getRandomAuthorNames = function () {
  //Purpose: Retrieves a random author name from your books collection
  //Return: string author name, null if no books exist
  if (this._bookShelf.length == 0) {return ("Null");}
  else {return this.getRandomBook().author;}
};


// Create book as object
var Book = function(title, author, numberOfPages, publishDate){
  this.title=title;
  this.author=author;
  this.numberOfPages=numberOfPages;
  this.publishDate= new Date(publishDate);
}

//Beginning Library
function booksInLibrary (){
    gLibrary.addBook(book1)
    gLibrary.addBook(book2)
    gLibrary.addBook(book3)
    gLibrary.addBook(book4)
    gLibrary.addBook(book5)
    gLibrary.addBook(book6)
    gLibrary.addBook(book7)
    return gLibrary;
  }

//Added _books
var newBooks = [
  new Book("Catcher in the Rye", "J.D. Salinger", 277, "7-16-1951"),
  new Book("The Undoing Project", "Michael Lewis", 368, "12-6-2016"),
  new Book("The Graveyard Book", "Neil Gaiman", 312, "9-30-2008"),
  new Book("The New New Thing", "Michael Lewis", 349, "10-17-1999"),
  new Book("The Shining", "Petra", 501, "9-28-1997")
];
//test array - books already in library
// var newBooks = [
//   new Book ("The Big Four", "Agatha Christie", 282, "1-27-1927");
//   new Book ("A Thousand Acres", "Jane Smiley", 367, "10-23-1991");
// ]
//*******************Local Storage**********************
//Stores data as strings - need to parse to convert back to objects when retireve

var JSONReadyLibrary = JSON.stringify(this._bookShelf);
localStorage.setItem("books", )

JSON.parse(localStorage.books).find(book=>this._bookShelf.author==='Petra' && this._bookShelf.title ==='The Shining')


document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.book1 = new Book ("IT", "Stephen King", 1138, "9-15-1986");
  window.book2 = new Book ("The Shining", "Stephen King", 447, "1-28-1977");
  window.book3 = new Book ("The Big Four", "Agatha Christie", 282, "1-27-1927");
  window.book4 = new Book ("A Thousand Acres", "Jane Smiley", 367, "10-23-1991");
  window.book5 = new Book ("To Kill a Mockingbird", "Harper Lee", 281, "7-11-1960");
  window.book6 = new Book ("The Shining", "Petra", 501, "9-28-1997");
  window.book7 = new Book ("Holden Reincarnated", "Collin Taylor", 104, "4-16-2001");
  //************local storage*******************
  // window.localStorage;
});
