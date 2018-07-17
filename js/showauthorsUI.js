var ShowAuthorsUI = function(container){
  this.$container = container;
  Library.call(this);
  console.log(Library);

};

//extend to library Project to showauthorsui.proto
ShowAuthorsUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
ShowAuthorsUI.prototype.init = function() {
  window._bookShelf = this.retrieveBooks();
  // console.log(window._bookShelf);
  this._bindEvents();
  return false;
};

ShowAuthorsUI.prototype._bindEvents = function() {
  $('#distinct-authors').on('click', $.proxy(this._handleShowAuthors, this));
  // console.log('_bindEvents');
};

ShowAuthorsUI.prototype._handleShowAuthors = function() {
  // console.log('hello');
  var authors = this.getDistinctAuthors();
  // console.log(authors);
  // console.log(authors.length);
  // $('#allAuthorsModal').modal('show');
  if(authors.length > 0){
    // console.log("Brett is cool")
    this.$container.modal('show');
    // $('#allAuthorModal').modal('show');
    this.$container.find('.modal-body').html(this._createUlOfAuthors(authors));
    // $('#allAuthorModal.modal-body'.html(this._createUIOfAuthors(authors));
  // console.log(this.getAuthors());
  }
  return false;
}

ShowAuthorsUI.prototype._createUlOfAuthors = function(authors) {
  // console.log('yes');
  var ul = document.createElement("ul");
  for(var i =0; i< authors.length; i++) {
    var li = document.createElement("li");
    // console.log(authors[i]);
    $(li).text(authors[i]);
    ul.append(li);
  }
    console.log(ul);
    return ul;
};

//set up document ready
$(function(){
  window.gShowAuthorsUI = new ShowAuthorsUI($('#allAuthorsModal')); //creates new instance on library
  window.gShowAuthorsUI.init();


  // console.log("init");
});//remove instance created on gLibrary - don't need document.EventListener code
