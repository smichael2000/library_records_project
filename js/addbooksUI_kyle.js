var AddBooksUI = function(container){
  Library.call(this);
  this._tempBookShelf = new Array();
  this.$container = container;
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function() {
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  $('#add-books-btn').on('click', $.proxy(this._handleModalOpen, this));
  
};

AddBooksUI.prototype._queueBooks = function () {

};
AddBooksUI.prototype._handleModalOpen = function () {
  this.$container.modal('show');
};

$(function(){
  window.gAddBooksUI = new AddBooksUI($('#addBookModal'));
  window.gAddBooksUI.init();
});
