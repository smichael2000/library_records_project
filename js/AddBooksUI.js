var AddBooksUI = function(container){
  Library.call(this);
  this._queue = [];
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
  this.$container.find('.clear-q').on('click', $.proxy(this._clearQueue, this));

  this.$container.find(.queueBtn).on('click', $.proxy(this._queueBooks, this));
  // this.$container.find(.clearQue).on('click', $.proxy(this._queueBooks, this));
  $('#addBkBtn').on('click', $.proxy(this._handleAddBooks, this));

};

AddBooksUI.prototype._queueBooks = function () {
  console.log('queue_handle check')
  var sForm = this.$container.find('form').serializeArray();
  console.log(sForm);
  qObject= new Object();
  var validAddInput = true;
  $.each(sForm , function(index, kvp) {
    if (kvp.value) {
      qObject[kvp.name]=kvp.value;
      console.log(qObject);
    }
    else {
      validAddInput = false;
      alert("Please enter the value for: " + kvp.name);
    }
    // if(validAddInput && this.nodups(qBook)) {
    //   this.$container.find('').text(this._queue.push(oBook));
    // }
    // // console.log(this._queue);
    // return validAddInput;
};

AddBooksUI.prototype._handleAddBooks = function() {
  console.log('hello');
  console.log(this.$container);
  this.$container.modal('show');
  if (this_queue) {
    if(this.addBooks(this._queue)) {
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
  console.log('works');

window.gAddBooksUI = new AddBooksUI($('#addModal'));
window.gAddBooksUI.init();
});
