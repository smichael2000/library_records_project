var EditUI = function(){
  Library.call(this);
  this.$container = $('editModal');
  // console.log(this.$container);

};

//extend to library Project to RandomAuthorsUI.proto
EditUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
EditUI.prototype.init = function() {
  // window._bookShelf = this.retrieveBooks();
  // console.log(window._bookShelf);
  this._bindEvents();
  return false;
};

EditUI.prototype._bindEvents = function() {
  $('.editBtn').on('click', $.proxy(this._handleEdit, this));
  $('.editBtn').on('click', this._openModal.bind(this))
  // console.log('_bindEvents');
};

EditUI.prototype._handleEdit = function(e) {
  event.preventDefault();
  // console.log("_handleSearch");
  
  this._handleEventTrigger('searchEvent', searchResult);

};

$(function(){
  window.gEditUI = new EditUI(); //creates new instance on library
  window.gEditUI.init();
});
