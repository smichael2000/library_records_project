var AddBooksUI = function(container){
  Library.call(this);
  this._queue = [];
  this.$container = container;
};

AddBooksUI.prototype = Object.create(Library.prototype);

AddBooksUI.prototype.init = function () {
  //window._bookShelf = this.retrieveBooks();
  this._bindEvents();
};

AddBooksUI.prototype._bindEvents = function () {
  console.log('heelloooo');
  $('#addBkBtn').on('click', $.proxy(this._handleAddBooks, this));
  this.$container.find(.queueBtn).on('click', $.proxy(this._queueBooks, this));
  // this.$container.find(.clearQue).on('click', $.proxy(this._queueBooks, this));
  //return false;

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
    // return this._queueShelf.push(qObject).text();
};

AddBooksUI.prototype._handleAddBooks = function() {
  console.log('hello');
  console.log(this.$container);
  this.$container.modal('show');

};

$(function(){
window.gAddBooksUI = new addbooksUI($('#addModal'));
window.gAddBooksUI.init();
});
