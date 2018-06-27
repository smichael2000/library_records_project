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
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].author.indexOf(authorName)>-1) {
      this._bookShelf.splice(i,1);
      return true;
    }
  return false;
  }
};

Library.prototype.getRandomBook = function () {
  var rand = this._bookShelf[Math.floor(Math.random() * this._bookShelf.length)];
  return rand;
};

//This is not working properly
Library.prototype.getBookByTitle = function (title) {
  var booksbytitle = [];
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].title === title) {
      console.log(this._bookShelf[i]);
      booksbytitle.push(this._bookShelf[i]);
    }
  }
  if (booksbytitle.length == 0) {
    return ("There are no books by that title");
  }
  else {
    return booksbytitle;
  }
};

Library.prototype.getBooksByAuthor = function (authorName) {
  var randAuthor = [];
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].author === authorName) {
      randAuthor.push(this._bookShelf[i].title);
    }
  }
  return ("The library has the following books by " + authorName +": " + randAuthor);
};

Library.prototype.addBooks = function (books) {

};

Library.prototype.getDistinctAuthors = function () {
  var authors = this._bookShelf.author;
    
  // for(var i = 0; i<this._bookShelf.length; i++){
  //   if(distinctAuthors.indexOf(this._bookShelf[i]) == -1){
  //       distinctAuthors.push(this._bookShelf[i].author)
  //   }
  // }
    return distinctAuthors;
};

Library.prototype.getRandomAuthorNames = function () {
  var rand = this._bookShelf[Math.floor(Math.random() * this._bookShelf.length)];
  return rand.author;
};

// Create book as object
var Book = function(title, author, numberOfPages, publishDate){
  this.title=title;
  this.author=author;
  this.numberOfPages=numberOfPages;
  this.publishDate= new Date(publishDate);
}

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
