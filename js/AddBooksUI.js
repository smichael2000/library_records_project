var AddBooksUI = function(){
  Library.call(this);
  this._q = [];
  this.$container = $('#addModal');
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function () {
  this.retrieveBooks();
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  $('button#btn-queue').on('click', $.proxy(this._qBooks, this));
  this.$container.find('.add-to-lib').on('click', $.proxy(this._handleAddBooks, this));
  this.$container.find('#genre-option').on('clickl', $.proxy(this._handleGenreField, this));
  this.$container.find('.clear-q').on('click', $.proxy(this._clearQ, this));
  $('#addBkBtn').on('click', $.proxy(this._openModal, this));
};

AddBooksUI.prototype._openModal = function () {
  this.$container.modal('show');
};

AddBooksUI.prototype._qBooks = function () {
  // e.preventDefault();
  //*************Serialized Array code here - need to troubleshoot - sForm = {}
    // console.log('queue_handle check');
  //   // console.log($('#addBkForm'));
  //   var sForm = $('#addBkForm').serializeArray();
  //   // console.log(this.$container.find('#form'), 'form');
  //   console.log(sForm);
  //   qBook= new Object();
  //   // console.log(qBook, 'Obj');
  //   var validAddInput = true;
  //   $.each(sForm , function(index, kvp) {
  //     console.log(kvp.value, 'value');
  //     if (kvp.value) {
  //       qBook[kvp.name]=kvp.value;
  //       // console.log(qBook);
  //     }
  //     else {
  //       validAddInput = false;
  //       alert("Please enter the value for: " + kvp.name);
  //     }
  //   })
  //     if(validAddInput && noDups(qBook)) {
  //     //   this.$container.find('').text(this._queue.push(oBook));
  //       this._q.push(qBook);
  //     }
  //     // console.log(this._q, 'queue');
  //
  //     // console.log(this._q);
  //     return validAddInput;
  // };
// serialized array empty - trying different approach & will continue to problem solve with serialized array
//creating object
  var cover = cover || 'image';
  var genre =$('#genre-option').val();
  var title = $('#title').val();
  var author =$ ('#author').val();
  var numPages= $('#numberOfPages').val();
  var yearPublished = $('#publishDate').val();

  console.log(cover, genre, title, author, numPages, yearPublished);
  var qBook = new Book(cover, genre, title, author, numPages, yearPublished);

  for (var key in qBook) {
    if (key.value) {

    } else { alert('Please input ' + key)}
  };
  if (noDups(qBook)){
    this._q.push(qBook);
    this.$container.find('#numInQ').text(this._q.length + ' book(s) added to queue');
    // console.log($('#form')[0]);
    // $("#form")[0].reset();
    // this._handleResetForm();
  } else
    alert('This book is already in the library.')
  this.$container.find('#numInQ').text(this._q.length+ " book(s) added to queue");
  console.log(this._q.length, '_q - end');
  return qBook;
};

AddBooksUI.prototype._handleAddBooks = function() {

  // console.log(this._q.length,'HandleAddBooks-beginning');
  if (this._q) {
    this.addBooks(this._q);
    this._clearQ();
    $('#addModal').modal('hide');
  } else {
    alert("Please queue at least one book.")
  }
  // console.log(this._q.length, "handleAddBooks");
  return false;
};

AddBooksUI.prototype._clearQ = function () {
  this._q = [];
  return false;
};

AddBooksUI.prototype._handleGenreField = function () {
  var dropdown_btn = $('#genre-option').val();

};

// AddBooksUI.prototype._handleResetForm = function () {
//   // console.log(document.getElementById('clear-q-form'));
//   this.$container.find('#clear-q-form')[0].reset();
// };

// AddBooksUI.prototype._handleEditField = function () {
//   var edit = $('#edit-btn').button({
//   classes: {
//     "edit": "highlight"
//   }
// })

// };

//*************Serialized Array code here - need to troubleshoot - sForm = {}
  // console.log('queue_handle check');
  // var sForm = this.$container.find('form').serializeArray();
  // console.log(this.$container.find('form'), 'form');
  // console.log(sForm, 'sForm');
  // qObject= new Object();
  // console.log(qObject, 'Obj');
  // var validAddInput = true;
  // $.each(sForm , function(index, kvp) {
  //   console.log(kvp.value, 'value');
  //   if (kvp.value) {
  //     qObject[kvp.name]=kvp.value;
  //     console.log(qObject);
  //   }
  //   else {
  //     validAddInput = false;
  //     alert("Please enter the value for: " + kvp.name);
  //   }
  // })
  //   if(validAddInput && this.noDups(qObject)) {
  //   //   this.$container.find('').text(this._queue.push(oBook));
  //     this._q.push(qObject);
  //   }
  //   console.log(this._q, 'queue');

    // // console.log(this._q);
    // return validAddInput;
// };
// **************** end of Serialized Array code
$(function(){
  // console.log('here');
  window.gAddBooksUI = new AddBooksUI();
  window.gAddBooksUI.init();
});
