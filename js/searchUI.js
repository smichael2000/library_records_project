var SearchUI = function(container){
  this.$container = container;
  Library.call(this);
  // console.log(Library);

};

//extend to library Project to RandomAuthorsUI.proto
SearchUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
SearchUI.prototype.init = function() {
  window._bookShelf = this.retrieveBooks();
  // console.log(window._bookShelf);
  this._bindEvents();
  return false;
};

SearchUI.prototype._bindEvents = function() {
  $('#search-btn').on('click', $.proxy(this._handleSearch, this));
  // console.log('_bindEvents');
};

};SearchUI.prototype._handleSearch = function(pre) {
  var query = this.$container.find('search-field').val();
  var search = this.search(query);
  this._handleEventTrigger('ubiquitous', search);
  pre.preventDefault();

};

$(function(){
  window.gSearchUI = new SearchUI($('#suggestedBookModal')); //creates new instance on library
  window.gSearchUI.init();
});
