var RandomAuthorUI = function(container){
  this.$container = container;
  Library.call(this);
  // console.log(Library);

};

//extend to library Project to RandomAuthorsUI.proto
RandomAuthorUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
RandomAuthorUI.prototype.init = function() {
  // window._bookShelf = this.retrieveBooks();
  // console.log(window._bookShelf);
  this._bindEvents();
  return false;
};

RandomAuthorUI.prototype._bindEvents = function() {
  $('#random-author').on('click', $.proxy(this._handleRandomAuthor, this));
  // console.log('_bindEvents');
};

RandomAuthorUI.prototype._handleRandomAuthor = async function() {
  var book = await this.getBkById(this.getRandomAuthorNames());
  var author = book.author;
  // console.log(author);
  var books = this.getBooksByAuthor(author);
  // console.log(books, 'books by '+ author);
  this.$container.find('.suggestedAuthor').text(author);
  this.$container.find('.listOfBooks').text('Books by ' + author + ' in your library:');
  this.$container.find('.booksByAuthor').text(books);
  this.$container.find('.booksByAuthor').html(this._createUlOfBooks(books));
  this.$container.modal('show');
};

RandomAuthorUI.prototype._createUlOfBooks = function(books) {
// console.log('yes');
var ul = document.createElement("ul");
for(var i =0; i< books.length; i++) {
  var li = document.createElement("li");
  // console.log(books[i].title);
  $(li).text(books[i].title);
  ul.append(li);
}
  // console.log(ul);
  return ul;
};

//set up document ready
$(function(){
  window.gRandomAuthorUI = new RandomAuthorUI($('#randomAuthorModal')); //creates new instance on library
  window.gRandomAuthorUI.init();
});
