var RemoveBooksUI = function(container){
  Library.call(this);
  this.$container = container;
};

RemoveBooksUI.prototype = Object.create(Library.prototype);

RemoveBooksUI.prototype.init = function () {
  // this.retrieveBooks();
  this._bindEvents();
};

RemoveBooksUI.prototype._bindEvents = function () {
  this.$container.find('.remove-bks').on('click', $.proxy(this._handleRemoveBooks, this));
  $('#removeBkBtn').on('click', $.proxy(this._openModal, this));

};

RemoveBooksUI.prototype._openModal = function () {
  this.$container.modal('show');
};

RemoveBooksUI.prototype._handleRemoveBooks = function() {
  var title = $('#titleRemove').val();
  var author =$ ('#authorRemove').val();

  // console.log(title, 'titleRemove', author, 'authorRemove');
  if (title) {
    this.removeBookByTitle(title);
    alert('The book, ' + title + ', was removed.');

  }
  else if (author) {
    // console.log('made it to author');
    this.removeBookByAuthor(author);
    // alert('The book(s) by the author, '  author + ', was/were removed.');
  }
  else {
    alert('The book is not in the library.');
  }
};

$(function(){
  // console.log('here');
  window.gRemoveBooksUI = new RemoveBooksUI($('#removeModal'));
  window.gRemoveBooksUI.init();
});
