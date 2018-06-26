var Library = function(){
  this._bookShelf = new Array();
};


Library.prototype.addBook = function (book) {
  //we need to check title of book object against each book in this._bookShelf through an iteration
  //addBook needs to add an object coming from my book param to my array (this._bookShelf)
  //needs to return true if added and false if not added
  for (var i = 0; i < this._bookShelf.length; i++) {
    if (this._bookShelf[i].title.indexOf(book.title)>-1){
      return false;
    }
  }
  return this._bookShelf.push(book) > 0;
};

Library.prototype.removeBookByTitle = function (title) {
  //we need to check title of book object against each book in this._bookShelf through an iteration
  //removeBookByTitle needs to remove an object from library (this._bookShelf)
  //needs to return true if removed and false if not in library to remove
  for(var i = 0; i<this.bookShelf.length; i++){
    if (this._bookShelf[i].title.indexOf(book.title) > -1) {
      this.bookShelf.splice(i,1);
      return true;
    }
  }
  return false;
};

Library.prototype.removeBookBYAuthor = function (authorName) {
  //we need to check author of book object against each book in this._bookShelf through an iteration
  //removeBookByAuthor needs to remove an object from library (this._bookShelf)
  //needs to return true if removed and false if not in library to remove
  for(var i = 0; i<this.bookShelf.length; i++){
    if (this._bookShelf[i].author.indexOf(book.author)>-1);
      this.bookShelf.splice(i,1);
      return true;
  }
  return false;
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
  this.publishDate= new Date(publishDate);
}

document.addEventListener("DOMContentLoaded", function() {
  window.gLibrary = new Library();
  window.gLibrary.addBook(new Book (bookList));
});

//Library of Books from Brett - has dups of titles and authors for testing
var bookList = [{
  title: "Harry Potter",
  author: "JK Rowling",
  numberOfPage: 300,
  publishDate: new Date()
},
{
  title:"Spot",
  author:"Jane",
  numberOfPages: 20,
  publishDate: new Date()
},
{
  title:"This is a book title",
  author:"book writer",
  numberOfPages: 50,
  publishDate: new Date()
},
{
  title:"This is another book title",
  author:"Frank",
  numberOfPages:235,
  publishDate: new Date()
},
{
  title:"World of Books",
  author:"Atlas",
  numberOfPages:132,
  publishDate: new Date()
},
{
  title:"World of Books",
  author:"Atlas",
  numberOfPages:132,
  publishDate: new Date()
},
{
  title:"World of Books",
  author:"Atlas",
  numberOfPages:132,
  publishDate: new Date()
},
{
  title: "Harry Potter Two",
  author: "JK Rowling",
  numberOfPages: 200,
  publishDate: new Date()
},
{
  title: "Harry Potter Three",
  author: "JK Rowling",
  numberOfPages: 300,
  publishDate: new Date()
},
{
  title: "Harry Potter Four",
  author: "JK Rowling",
  numberOfPages: 400,
  publishDate: new Date()
}]
//["IT", "The Great Gatsby", "Catcher in the Rye"]
