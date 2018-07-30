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
  console.log(e);
  console.log($(e.currentTarget).parent().parent());
  //better to loop over and serach for 'title' in td
  var td=$(e.currentTarget).parent().parent().children()[2];
  this.title = $(td).data('title');
  console.log(td);
  var book = this.getBookByTitle(this.title);
  this.$container.find('#edit-title').attr('value',book.title);
  this.$container.find('#edit-author').attr('value',book.author);
  this.$container.find('#edit-pubDate').attr('value',book.pubDate);
  this.$container.find('#edit-numPages').attr('value',book.numPages);
  this.$container.find('#edit-genre').attr('value',book.genre);
  console.log(book, 'book');
  this.$container.modal('show');

  var sForm = this.$container.find("form").serializeArray();
  var sForm = $('form').serializeArray();
  console.log(sForm);
  var obj = new Object();
  console.log(obj);
  $.each(sForm , function(index, kvp) {
    // console.log(kvp.value, 'value');
    if (kvp.value) {
      obj[kvp.name]=kvp.value;
      //console.log(book, 'if statment');
    }
  })
    var book = new Book(obj);
    console.log(book);
  this.editBook(this.title,book);
};

$(function(){
  window.gEditUI = new EditUI(); //creates new instance on library
  window.gEditUI.init();
});
