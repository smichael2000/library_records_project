var AddBooksUI = function(container){
  Library.call(this);
  this._q = [];
  this.$container = container;

};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function () {
  window._bookShelf = this.retrieveBooks();
  this._bindEvents();

};

AddBooksUI.prototype._bindEvents = function () {

  console.log('heelloooo');
  this.$container.find('.add-to-lib').on('click', $.proxy(this._handleAddBooks, this));
  // this.$container.find('.clear-q').on('click', $.proxy(this._clearQueue, this));
  // this.$container.find('.btn-queue').on('click', $.proxy(this._queueBooks, this));
  $('button#btn-queue').on('click', $.proxy(this._qBooks, this));
  // this.$container.find(.clearQue).on('click', $.proxy(this._queueBooks, this));
  $('#addBkBtn').on('click', $.proxy(this._openModal, this));
};

AddBooksUI.prototype._openModal = function () {
  console.log("bye");
  this.$container.modal('show');
};

AddBooksUI.prototype._qBooks = function (e) {
  e.preventDefault();

  var title = $("#title").val();
  var author = $('#author').val();
  var publishDate = $('#pubDate').val();
  var numberOfPages= $('#numberOfPages').val();
  var genre=$('#genre')
  console.log(title, author, publishDate, numberOfPages, genre);

  var qBook = new Book(title, author, pubDate, numberOfPages, genre);
  console.log(qBook);
  if (this.noDups(qBook)){
    this._q.push(qBook);
  }
  console.log(this._q, 'queue');
  // $.each(this._q , function(index, kvp) {
  //   console.log(kvp.value, 'value');
  //   if (kvp.value) {
  //     qObject[kvp.name]=kvp.value;
  //     console.log(qObject);
};

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
  //     this._queue.push(qObject);
  //   }
  //   console.log(this._queue, 'queue');

    // // console.log(this._queue);
    // return validAddInput;
// };

AddBooksUI.prototype._handleAddBooks = function() {
  if (this._q) {
    if(this.addBooks(this._q)) {
      console.log(Library);
      this._clearQ();
    }
  } else {
    alert("Please queue at least one book.")
  }
  return false;
};

AddBooksUI.prototype._clearQ = function () {
  this._queue = [];
  // this.$container.find('.queueNumber').text(this._queue.length);
  return false;
};

$(function(){
  // console.log('here');
  window.gAddBooksUI = new AddBooksUI($('#addModal'));
  window.gAddBooksUI.init();
});

// console.log('there');
