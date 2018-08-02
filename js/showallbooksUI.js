var ShowAllBksUI = function(){
  Library.call(this);
  this.$container = document;
  // console.log(this.$container);

};

//extend to library Project to RandomAuthorsUI.proto
ShowAllBksUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
ShowAllBksUI.prototype.init = function() {
  // window._bookShelf = this.retrieveBksDb();
  // console.log(window._bookShelf);
  this._bindEvents();
  return false;
};

ShowAllBksUI.prototype._bindEvents = function() {
  $('#all-books').on('click', $.proxy(this._handleShowAllBks, this));
  // console.log('_bindEvents');
};

ShowAllBksUI.prototype._handleShowAllBks = function() {
  this.retrieveBksDb();



};

$(function(){
  window.gShowAllBksUI = new ShowAllBksUI(); //creates new instance on library
  window.gShowAllBksUI.init();
});
