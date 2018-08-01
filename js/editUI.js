var EditUI = function(){
  Library.call(this);
  this.$container = $('#editModal');
  this.title="";
  this.tempBook = {}
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
  $(document).on('click', '#editBtn', $.proxy(this._handleEdit, this));
  this.$container.find('#saveChangesBtn').on('click', $.proxy(this._saveEditedBook, this));

};

EditUI.prototype._handleEdit = function(e) {
  // console.log(e.type);
  // console.log($(e.currentTarget).parent().parent().children());
  //better to loop over and serach for 'title' in td
  var td=$(e.currentTarget).parent().parent().children()[1];
  this.title = $(td).data('title');
  // console.log($(td).data('title'));
  // console.log(this.title, 'this.title');
  var book = this.getOneBookByTitle(this.title);
  // console.log(book, 'book after getBookByTitle');
  this.$container.find('#editId').attr('value',book._id);
  this.$container.find('#editTitle').attr('value',book.title);
  this.$container.find('#editAuthor').attr('value',book.author);
  this.$container.find('#editPubDate').attr('value',book.yearPublished);
  this.$container.find('#editNumPages').attr('value',book.numPages);
  this.$container.find('#editGenre').attr('value',book.genre);
  // console.log(book, 'book after .finds');
  this.$container.modal('show');

};

EditUI.prototype._serArr = function (book) {
  // console.log(book, 'beginning _serArr');
  var sForm = this.$container.find(".editBkForm").serializeArray();
  // console.log(sForm, 'sForm');
  var obj = new Object()
  $.each(sForm , function(index, kvp) {
    // console.log(kvp.value, 'value');
    if (kvp.value) {
      obj[kvp.name]=kvp.value;
      // console.log(kvp.name, kvp.value);
    } return;
  })
  // console.log(obj, "obj");
  // console.log(obj);
  var book=new Book(obj);
  // console.log(book);
  this.tempBook = book;
};

EditUI.prototype._saveEditedBook = function (e) {
  var book = this.getOneBookByTitle(this.title);
  this._serArr(book);
  e.preventDefault();
  // console.log('inside saveEditedBook');
  // console.log(this.tempBook)
  this.updateEditedbook(this.tempBook);
}

$(function(){
  window.gEditUI = new EditUI(); //creates new instance on library
  window.gEditUI.init();
});
