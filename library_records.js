var Library = function(){};

Library.prototype.bookShelf = new Array();

Library.prototype.addBook = function (book) {
  if(book && typeof book === "string"){
    this.bookShelf.push(bookTitle);
  } else {
    console.log("Error :: Book title needs to be a string.");
  }
};

Library.prototype.removeBookByTitle = function (title) {
  for(var i = 0; i<this.bookShelf.length; i++){
    console.log(this.bookShelf[i]);
  }
};

Library.prototype.removeBookBYAuthor = function (authorName) {

};

Library.prototype.getRandomBook = function () {

};

Library.prototype.getBookByTitle = function (title) {

};

Library.prototype.getBooksByAuthor = function (authorName) {

};

Library.prototype.addBooks = function (books) {

};

Library.prototype.getAuthors = function () {

};

Library.prototype.getRandomAuthorNames = function () {

};

// Create book as object
var Book = function(title, author, numberOfPages, publishDate){
  this.title=title;
  this.author=author;
  this.numberOfPages=numberOfPages;
  this.publishDate=publishDate;
}

Book.prototype

document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
});

//["IT", "The Great Gatsby", "Catcher in the Rye"]
