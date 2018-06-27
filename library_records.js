var Library = function(){
  this._bookShelf = new Array();
};


Library.prototype.addBook = function (book) {
  for (var i = 0; i < this._bookShelf.length; i++) {
    if (this._bookShelf[i].title.indexOf(book.title)>-1){
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
  // return false;

Library.prototype.getBookByTitle = function (title) {
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].title === title) {
      return this._bookShelf[i];
    }
  return false;
  }
};

Library.prototype.getBooksByAuthor = function (authorName) {
  for(var i = 0; i<this._bookShelf.length; i++){
    if (this._bookShelf[i].author === authorName) {
      return this._bookShelf[i];
    }
  }
  return false;
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
  this.publishDate= new Date(publishDate);
}

document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.gbookOne = new Book ("IT", "Stephen King", 1138, "9-15-1986");
  window.gbookTwo = new Book ("The Shining", "Stephen King", 447, "1-28-1977");
  window.gbookThree = new Book ("The Big Four", "Agatha Christie", 282, "1-27-1927");
  window.gbookFour = new Book ("A Thousand Acres", "Jane Smiley", 367, "10-23-1991");
  window.gbookFive = new Book ("To Kill a Mockingbird", "Harper Lee", 281, "7-11-1960");
});
