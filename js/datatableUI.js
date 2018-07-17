var DataTable = function(){
  Library.call(this);
  this.$container = $('#dataTable');
};

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function() {
  this.retrieveBooks();
  this._updateTable();
  this._bindEvents();
  this._bindCustomListeners();
};

DataTable.prototype._bindEvents = function () {
  //add native events here
};

DataTable.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateTable, this));

};

DataTable.prototype._updateTable = function (e) {
  // alert(e.detail.data);
  var table = document.createElement("TABLE");
  var _self = this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  console.log($tbody);
  if(window.bookShelf){
  this.$container.find('#tHead').replaceWith(this._createHeader(window.bookShelf[0]));
    $.each(window.bookShelf, function(index, book){
      $tbody.append(_self._createRow(book));
    })
  }
  else {
    alert('There are no books in your library.')
    return;
  }
  return;
};

DataTable.prototype._createRow = function (book) {
  var tr = document.createElement('tr');
  var deleteX = document.createElement('td');
  var edit=document.createElement('tr');


  // var deleteInput = document.createElement('input');
  // var att = document.createAttribute("type");
  // att.value = "checkbox";
  // deleteInput.setAttributeNode(att);

  for(var key in book){
    var td = document.createElement('td');
    $(td).text(book[key]);
    tr.append(td);
  }

  console.log(td);

  tr.append(edit);
  $(edit).text('edit');
  $(edit).addClass('btn');

  tr.append(deleteX);
  $(deleteX).text('X');
  $(deleteX).addClass('btn');
  // $(deleteX).attr("data-bkTitle", book.title);//this will allow me to use the attribute, booktitle, when I call an event on this element
  return tr;
};

DataTable.prototype._createHeader = function (book) {
  console.log('made it to _createHeader');
  var theader = document.createElement('thead');
  $(theader).attr("id","tHead");
  var thr = document.createElement('tr');
  $(thr).addClass("thead-light");
  theader.append(thr);
  var dummyBk = new Book();
  for(var key in dummyBk){
    var bkey = document.createElement('th');
    $(bkey).text(key);
    thr.append(bkey);
  }

  var edit = document.createElement('th');
  thr.append(edit);
  $(edit).text('edit');
  var deleteBook = document.createElement('th');
  thr.append(deleteBook);
  $(deleteBook).text('delete');
  // thr.append(document.createElement('td').append(deleteInput));
  return theader;
};

// DataTable.prototype._editBook = function (book) {
//  document.getElementById("edit_button"+no).style.display="block";
//
//  var title=document.getElementById('title+'no);
//  var author=document.getElementById('author'+no);
//  var publishDate=document.getElementById('publishDate'+no);
//
//  var title=title.innerHTML;
//  var author=author.innerHTML;
//  var publishDate=publishDate.innerHTML;
//
//  title.innerHTML="<input type='text' id='title"+no+"' value='"+title+"'>";
//  author.innerHTML="<input type='text' id='author"+no+"' value='"+author+"'>";
//  publishDate.innerHTML="<input type='text' id='publishDate"+no+"' value='"+publishDate+"'>";
// }

$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
