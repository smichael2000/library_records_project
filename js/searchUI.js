var SearchUI = function(){
  Library.call(this);
  this.$container = $('#searchForm');
  // console.log(this.$container);

};

//extend to library Project to RandomAuthorsUI.proto
SearchUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
SearchUI.prototype.init = function() {
  // window._bookShelf = this.retrieveBooks();
  // console.log(window._bookShelf);
  this._bindEvents();
  return false;
};

SearchUI.prototype._bindEvents = function() {
  $('#search-btn').on('click', $.proxy(this._handleSearch, this));
  $('#search-btn').on('click', $.proxy(this._handleReset, this));
  // console.log('_bindEvents');
};

SearchUI.prototype._handleSearch = function(e) {
  e.preventDefault();
  // console.log("_handleSearch");
  var query = this.$container.find('#search-field').val();
  // console.log(query);
  var searchResult = this.search(query);
  // console.log(searchResult);
  this._handleEventTrigger('searchEvent', searchResult);
};

SearchUI.prototype._handleReset = function () {
  $('.searchForm')[0].reset()
};

$(function(){
  window.gSearchUI = new SearchUI(); //creates new instance on library
  window.gSearchUI.init();
});
