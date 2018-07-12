var AddBooksUI = function(container){
  Library.call(this);
  this._q = [];
  this.$container = container;

};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function () {
  // window.bookShelf = this.retrieveBooks();
  this.retrieveBooks();
  this._bindEvents();

};

AddBooksUI.prototype._bindEvents = function () {
  $('button#btn-queue').on('click', $.proxy(this._qBooks, this));
  this.$container.find('.add-to-lib').on('click', $.proxy(this._handleAddBooks, this));
  // this.$container.find('.clear-q').on('click', $.proxy(this._clearQ, this));
  $('#addBkBtn').on('click', $.proxy(this._openModal, this));

};

AddBooksUI.prototype._openModal = function () {
  this.$container.modal('show');
};

AddBooksUI.prototype._qBooks = function (e) {
  e.preventDefault();

// serialized array empty - trying different approach & will continue to problem solve with serialized array
//creating object
  var title = $("#title").val();
  var author = $('#author').val();
  var numberOfPages= $('#numberOfPages').val();
  var publishDate = $('#pubDate').val();
  var genre=$('#genre').val();
  // console.log(title, author, numberOfPages,  publishDate, genre);
  var qBook = new Book(title, author, numberOfPages,  publishDate, genre);
  this._q.push(qBook);
  // this.$container.find('#numInQ').text(this._q.push(qBook)+ " book(s) added to queue");
  console.log(this._q.length, '_q - end');
  return (this._q);
};

AddBooksUI.prototype._handleAddBooks = function() {

  console.log(this._q.length,'HandleAddBooks-beginning');
  if (this._q) {
    this.addBooks(this._q);
  } else {
    alert("Please queue at least one book.")
  }
  //alert (count + " book(s) were added to your  library.")
  console.log(this._q.length, "handleAddBooks");
  return false;
};

AddBooksUI.prototype._clearQ = function () {
  this._q = [];
  // this.$container.find('.').text(this._q.length);
  return false;
};

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
  window.gAddBooksUI = new AddBooksUI($('#addModal'));
  window.gAddBooksUI.init();
});
