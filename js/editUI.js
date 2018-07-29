var EditUI = function(){
  Library.call(this);
  this.$container = $('#editModal');
  this.title="";
  // console.log(this.$container);

};

//extend to library Project to RandomAuthorsUI.proto
EditUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
EditUI.prototype.init = function() {
  // window._bookShelf = this.retrieveBooks();
  // console.log(window._bookShelf);
  this._bindEvents();
  // console.log("bound");
  return false;
};

EditUI.prototype._bindEvents = function() {
  $(document).on('click', '.editBtn', $.proxy(this._handleEdit, this));
  $(document).on('click', '#saveChangesBtn', $.proxy(this._updateTable, this));
  // $('.editBtn').on('click', this._openModal.bind(this))
  // console.log('_bindEvents');
};

EditUI.prototype._handleEdit = function(e) {
  console.log(e);
  console.log($(e.currentTarget).parent().parent());
  //better to loop over and serach for 'title' in td
  var td=$(e.currentTarget).parent().parent().children()[2];
  this.title = $(td).data('title');
  var book = this.getBookByTitle(title);
  this.$container.find('#edit-title').attr('value',book[0].title);
  this.$container.find('#edit-author').attr('value',book[0].author);
  this.$container.find('#edit-pubDate').attr('value',book[0].pubDate);
  this.$container.find('#edit-numPages').attr('value',book[0].numPages);
  this.$container.find('#edit-genre').attr('value',book[0].genre);
  // console.log(book[0], 'book');
  this.$container.modal('show');
};

$(function(){
  window.gEditUI = new EditUI(); //creates new instance on library
  window.gEditUI.init();
});
