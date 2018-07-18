var RandomBookUI = function(container){
  this.$container = container;
  Library.call(this);
  // console.log(Library);

};

//extend to library Project to RandomAuthorsUI.proto
RandomBookUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
RandomBookUI.prototype.init = function() {
  window._bookShelf = this.retrieveBooks();
  // console.log(window._bookShelf);
  this._bindEvents();
  return false;
};

RandomBookUI.prototype._bindEvents = function() {
  $('#suggested-book').on('click', $.proxy(this._handleRandomBook, this));
  // console.log('_bindEvents');
};

RandomBookUI.prototype._handleRandomBook = function() {
  var book = this.getRandomBook();
  var title = book.title;
  var author = book.author;
  console.log(book, author);
  this.$container.find('.modal-input').text(book.title + ' by ' + book.author);
  this.$container.modal('show');
};

//set up document ready
$(function(){
  window.gRandomBookUI = new RandomBookUI($('#suggestedBookModal')); //creates new instance on library
  window.gRandomBookUI.init();
});
