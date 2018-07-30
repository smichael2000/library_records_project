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

};

EditUI.prototype._handleEdit = function(e) {
  // console.log(e);
  // console.log($(e.currentTarget).parent().parent());
  //better to loop over and serach for 'title' in td
  var td=$(e.currentTarget).parent().parent().children()[2];
  this.title = $(td).data('title');
  //console.log(td);
  // console.log(this.title, 'this.title');
  var book = this.getOneBookByTitle(this.title);
  // console.log(book, 'book after getBookByTitle');
  this.$container.find('#edit-title').attr('value',book.title);
  this.$container.find('#edit-author').attr('value',book.author);
  this.$container.find('#edit-pubDate').attr('value',book.yearPublished);
  this.$container.find('#edit-numPages').attr('value',book.numPages);
  this.$container.find('#edit-genre').attr('value',book.genre);
  // console.log(book, 'book after .finds');
  this.$container.modal('show');
  this._serArr(book);
};

EditUI.prototype._serArr = function (book) {
  console.log(book, 'beginning _serArr');
  // console.log(this.$container.find("form"));
  var sForm = this.$container.find("form").serializeArray();
  // console.log(this.$container.find("form"));
  // var sForm = $('.editBkForm').serializeArray();
  console.log(sForm, 'sForm');
  var obj = new Object();
  // console.log(obj);
  $.each(sForm , function(index, kvp) {
    // console.log(kvp.value, 'value');
    if (kvp.value) {
      obj[kvp.name]=kvp.value;
      console.log(kvp.value);
    } return;
  })
    var book = new Book(obj);
    console.log(book, 'book after new Book & serArr');
  // this.editBook(this.title,book);
};

$(function(){
  window.gEditUI = new EditUI(); //creates new instance on library
  window.gEditUI.init();
});
