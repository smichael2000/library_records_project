var AddBooksUI = function(){
  Library.call(this);
  this._q = [];
  this.$container = $('#addModal');
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function () {
  // this.retrieveBooks();
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  $('button#btn-queue').on('click', $.proxy(this._qBooks, this));
  this.$container.find('.add-to-lib').on('click', $.proxy(this._handleAddBooks, this));
  this.$container.find('#genre-option').on('clickl', $.proxy(this._handleGenreField, this));
  this.$container.find('.clear-q').on('click', $.proxy(this._clearQ, this));
  $('#addBkBtn').on('click', this._openModal.bind(this))
};

AddBooksUI.prototype._openModal = function () {
  this.$container.modal('show');
};

AddBooksUI.prototype._qBooks = function () {
  // e.preventDefault();
  //*************Serialized Array code here - need to troubleshoot
    // console.log('queue_handle check');
    // console.log($('#addBkForm'));
    var sForm = $('form').serializeArray();
    // console.log(sForm, "sForm");
    // console.log(this.$container.find('form'), 'form');
    // console.log(sForm, 'sForm');

    var book = new Book("");
    //console.log(book, 'new Book');
    var validAddInput = true;
    $.each(sForm , function(index, kvp) {
      // console.log(kvp.value, 'value');
      if (kvp.value) {
        book[kvp.name]=kvp.value;
        //console.log(book, 'if statment');
      }
      else {
        validAddInput = false;
        alert("Please enter the value for: " + kvp.name);
      }
      return book;
    })
      if(validAddInput && noDups(book)) {
        this._q.push(book);
        this.$container.find('#numInQ').text(this._q.length+ " book(s) added to queue");
        // console.log(this._q.length, '_q - end');
        this._handleResetForm();
      }
      else {alert('This book is already in the library.')};
      return validAddInput;
};

AddBooksUI.prototype._handleAddBooks = function() {
  if (this._q) {
    // console.log(this._q, "this._q");
    //   console.log(this, 'this');
    this.addBooks(this._q);
    this._clearQ();
    $('#addModal').modal('hide');
  } else {
    alert("Please queue at least one book.")
  }
  return false;
};

AddBooksUI.prototype._clearQ = function () {
  this._q = [];
  return false;
};

AddBooksUI.prototype._handleGenreField = function () {
  var dropdown_btn = $('#genre-option').val();

};

AddBooksUI.prototype._handleResetForm = function () {
  this.$container.find('#addBkForm')[0].reset()
  // console.log($('#addBkForm'))
};

// AddBooksUI.prototype._handleEditField = function () {
//   var edit = $('#edit-btn').button({
//   classes: {
//     "edit": "highlight"
//   }
// })

$(function(){
  // console.log('here');
  window.gAddBooksUI = new AddBooksUI();
  window.gAddBooksUI.init();
});
