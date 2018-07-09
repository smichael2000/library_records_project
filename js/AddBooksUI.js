var AddBooksUI = function(){
  Library(call).this;
this._tempBookShelf = [];
this.$container = container;
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function () {

};

AddBooksUI.prototype._bindevents = function () {
  $('#add-books-btn').on('click', $.proxy(this.handleModalOpen, this));
};

AddBooksUI.prototype._handleModalOpen = funtion() {
  this.$container.modal('show');
}

$(function(){
window.fAddBooksUI= new AddBooksUI($('#addBookModal'));
});
