var ShowAuthorsUI = function(){
  this.$container = container;
  Library.call(this);

};

//extend to library Project to showauthorsui.proto
ShowAuthorsUI.prototype = Object.create(Library.prototype);


//create method fire off everything need from get go
ShowAuthorsUI.prototype.init = function() {
  this.recover();
  this._bindEvents();
  return; //stops the function
};

ShowAuthorsUI.prototype._bindEvents = function() {
  // $("button[data-target="#allAuthorsModal"]").on('click', $.proxy(this, this._handleShowAuthors));
  $('button#show-all').on('click', $.proxy(this, this._handleShowAuthors));
  return false;
};

ShowAuthorsUI.prototype._handleShowAuthors = function() {
  $('#allAuthorModal').modal('show');
  if(this.getAuthors().length){
    this.$container.modal('show');
    // $('#allAuthorModal').modal('show');
    this.$container.html(this._createUIOfAuthors(authors));
    // $('#allAuthorModal.modal-body'.html(this._createUIOfAuthors(authors));
  // console.log(this.getAuthors());
  }
  return false;
}

ShowAuthorsUI.prototype._createUIOfAuhtors = function(authors) {
  var ul = document.createElement("ul");
  for(var i =0; i< authors.length; 1++) {
    var li = document.createElement('li');
    $(li).text(authors[i]);
    ul.append(li);
  }
}
//set up document ready
$(function(){
  window.gShowAuthorsUI = new ShowAuthorsUI($('#allAuthorModal'); //creates new instance on library
  window.gShowAuthorsUI.init();
})//remove instance created on gLibrary - don't need document.EventListener code
