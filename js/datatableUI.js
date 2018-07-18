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
  $('#editBtn').on('click', $.proxy(this._EditModal, this));
};

DataTable.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateTable, this));
  $(document).on('ubiquitous', $.proxy(this._searchQuery, this));
};

DataTable.prototype._updateTable = function (e) {
  // alert(e.detail.data);
  var table = document.createElement('table');
  var _self = this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  // console.log($tbody);
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

DataTable.prototype._searchQuery = function (e) {
  var _self=this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  if(e){
    this.$container.find('#search-btn').replaceWith(this._createHeader(e[0]))
    $.each(e, function(index, book){
      $tbody.append(_self._createRow(book));
    })
  }else{
    alert("no books in the bookshelf")
  }

};

DataTable.prototype._createRow = function (book) {
var tr = document.createElement('tr');

//puts book object in td in tr
  for(var key in book){
    var td = document.createElement('td');
    $(td).attr('contenteditable', 'true');
    $(td).text(book[key]);
    tr.append(td);
  }
//adds delete button to td in tr
  var tdX = document.createElement('td');
  var trX = document.createElement('input');
  tdX.append(trX);
  $(tdX).attr(book.title);
  trX.setAttribute('type','button');
  trX.setAttribute('value','X');
  tr.append(trX);
  //
  // var rowGone = document.getElementById('dataTable');
  //   rowGone.deleteRow(trX.parentNode.parentNode.rowIndex)

  //Determine the reference of the Row using the Button.
  // var row = trX.parentNode.parentNode;
  // var name = row.getElementsByTagName("td")[0].innerHTML;
  // if (confirm("Do you want to delete: " + name)) {
  //   //Get the reference of the Table.
  //   var table = document.getElementById("dataTable");
  //   //Delete the Table row using it's Index.
  //   // table.deleteRow(row.rowIndex);
  // }
//adds edit button to td in tr
  var tdEdit= document.createElement('td');
  var trEdit = document.createElement('button');
  tdEdit.append(trEdit);
  var trEditText = document.createTextNode("Edit");
  trEdit.setAttribute("name",name);
  trEdit.appendChild(trEditText);
  $(trEdit).attr("id", "editBtn")
  tr.append(tdEdit);

  return tr;
};

DataTable.prototype._createHeader = function (book) {
  // console.log('made it to _createHeader');
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

  var deleteBook = document.createElement('th');
  thr.append(deleteBook);
  $(deleteBook).text('delete');

  var edit = document.createElement('th');
  thr.append(edit);
  $(edit).text('edit');
  return theader;
};

// DataTable.prototype._editModal = function (book) {
//   this.$container.modal('show');
// };

$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
