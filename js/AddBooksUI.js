var AddBooksUI = function(container){
  Library(call).this;
  this._tempBookShelf = [];
  this.$container = container;
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function () {
  window._bookShelf = this.retrieveBooks();
  this._bindEvents();
};

AddBooksUI.prototype._bindevents = function () {
  $('addBkBtn').on('click', $.proxy(this.handleModalOpen, this));
  //books that are qued
  //add one book
  //add all books that are qued
  return false;
};

AddBooksUI.prototype._handleModalOpen = function() {
  this.$container.modal('show');
};

$(function(){
window.gAddBooksUI= new AddBooksUI($('#addModal'));
});
