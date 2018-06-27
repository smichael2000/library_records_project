var Library = function(){
  this._bookShelf = new Array();
};


Library.prototype.addBook = function (book) {
  for (var i = 0; i < this._bookShelf.length; i++) {
    if (this._bookShelf[i].title.indexOf(book)>-1){
      return false;
    }
  }
  return this._bookShelf.push(book) > 0;
};

Library.prototype.removeBookTitle = function (title) {
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].title.indexOf(title) > -1) {
      this._bookShelf.splice(i,1);
      return true;
    }
  }
  return false;
};

Library.prototype.removeBookAuthor = function (authorName) {
   var authors = [];
   for(var i = 0; i<this._bookShelf.length; i++) {
     authors.push(this._bookShelf[i].indexOf(authorName));
     console.log(authors);
  }
   this._bookShelf = this._bookShelf.filter(i => authors.indexOf(i) == -1);
   return this._bookShelf;
  // for(var i = 0; i<this._bookShelf.length; i++){
  //   if (this._bookShelf[i].author.indexOf(authorName)>-1) {
  //     this._bookShelf.splice(i,1);
  //     return true;
};

Library.prototype.getRandomBook = function () {
  // var rand = this._bookShelf[Math.floor(Math.random() * this._bookShelf.length)];
  return (this._bookShelf[Math.floor(Math.random() * this._bookShelf.length)]);
};

//This is not working properly
Library.prototype.getBookByTitle = function (title) {
  var booksbytitle = [];
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].title === title) {
      booksbytitle.push(this._bookShelf[i]);
    }
  }
  if (booksbytitle.length == 0) {
    return ("There are no books by that title");
  }
  else {
    return ("The following books in the library have the title " + title + ": " + booksbytitle);
  }
};

Library.prototype.getBooksByAuthor = function (authorName) {
  var booksByAuthor = [];
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].author === authorName) {
      booksByAuthor.push(this._bookShelf[i].title);
    }
  }
  return ("The library has the following books by " + authorName +": " + booksByAuthor);

};

Library.prototype.addBooks = function () {
  var originalLength = this._bookShelf.length;
  for (var i = 0; i < newBooks.length; i++) {
    // this.addBook(newBooks[i]);
    this._bookShelf.push(newBooks[i]);
  }
  // var newBookShelf = new Set(this._bookShelf);
  return (this._bookShelf - originalLength + " books were added to the library");
};

Library.prototype.getDistinctAuthors = function () {
  var authors = [];
  for(var i = 0; i<this._bookShelf.length; i++){
    authors.push(this._bookShelf[i].author);
  }
  var distinctAuthors = new Set(authors);
  return distinctAuthors;
};

Library.prototype.getRandomAuthorNames = function () {
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
  ("Catcher in the Rye", "J.D. Salinger", 277, "7-16-1951"),
  ("The Undoing Project", "Michael Lewis", 368, "12-6-2016"),
  ("The Graveyard Book", "Neil Gaiman", 312, "9-30-2008"),
  ("The New New Thing", "Michael Lewis", 349, "10-17-1999"),
  ("The Shining", "Petra", 501, "9-28-1997")
]


document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.book1 = new Book ("IT", "Stephen King", 1138, "9-15-1986");
  window.book2 = new Book ("The Shining", "Stephen King", 447, "1-28-1977");
  window.book3 = new Book ("The Big Four", "Agatha Christie", 282, "1-27-1927");
  window.book4 = new Book ("A Thousand Acres", "Jane Smiley", 367, "10-23-1991");
  window.book5 = new Book ("To Kill a Mockingbird", "Harper Lee", 281, "7-11-1960");
  window.book6 = new Book ("The Shining", "Petra", 501, "9-28-1997");
  window.book7 = new Book ("Holden Reincarnated", "Collin Taylor", 104, "4-16-2001");
});
