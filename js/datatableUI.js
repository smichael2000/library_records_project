var DataTable = function(){
  Library.call(this);
  this.$container = $('#dataTable');
};

DataTable.prototype = Object.create(Library.prototype);

DataTable.prototype.init = function() {
  this.retrieveBksDb();
  this._bindEvents();
  this._bindCustomListeners();
};

DataTable.prototype._bindEvents = function () {
  // $('.editBtn').on('click', $.proxy(this._editModal, this));
  $('#dataTable').on('click','.deleteBtn', $.proxy(this._deleteRow, this));

};

DataTable.prototype._bindCustomListeners = function () {
  $(document).on('objUpdate', $.proxy(this._updateTable, this));
  $(document).on('searchEvent', $.proxy(this._searchTable, this));
};

DataTable.prototype._updateTable = function (e) {
  // console.log(e);
  var table = document.createElement('table');
  var _self = this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  // console.log($tbody);
  if(window._bookShelf){

  this.$container.find('#tHead').replaceWith(this._createHeader(e[0]));
    $.each(e, function(index, book){
      $tbody.append(_self._createRow(book));
    })
  }
  else {
    alert('There are no books in your library.')
    return;
  }
  return;
};

DataTable.prototype._searchTable = function (e) {
  // console.log(e.detail);
  this._updateTable(e.detail);

};

DataTable.prototype._createRow = function (book) {
var tr = document.createElement('tr');

//puts book object in td in tr
  for(var key in book){
    var td = document.createElement('td');
    $(td).text(book[key]);
    $(td).data(key,book[key]);
    if (key != '_id'){
      tr.append(td);
    }
  }
//adds delete & edit buttons to td in tr
  var tdDelete = document.createElement('td');
  var deleteBtn = document.createElement('input');
  tdDelete.append(deleteBtn);
  $(tdDelete).data('data-title', book.title);
  deleteBtn.setAttribute('type','button');
  deleteBtn.setAttribute('value','X');
  deleteBtn.setAttribute('class','deleteBtn')
  tr.append(tdDelete);

//adds edit button to td in tr
  var tdEdit= document.createElement('td');
  var editBtn = document.createElement('button');
  tdEdit.append(editBtn);
  var trEditText = document.createTextNode("Edit");
  editBtn.setAttribute("name",name);
  editBtn.appendChild(trEditText);
  $(editBtn).attr("class", "editBtn")
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
  var dummyBk = new Book({});
  for(var key in dummyBk){
    if (key != '_id'){
      var bkey = document.createElement('th');
      $(bkey).text(key);
      thr.append(bkey);
    }
  }

  var deleteBook = document.createElement('th');
  thr.append(deleteBook);
  $(deleteBook).text('delete');

  var edit = document.createElement('th');
  thr.append(edit);
  $(edit).text('edit');
  return theader;
};

DataTable.prototype._deleteRow = function (e) {
  // console.log("delete button worked");
  console.log($(e.currentTarget).closest('tr').children()[2]);
  var deleteTr = $(e.currentTarget).closest('tr').children()[2];
  var title = $(deleteTr).data('title');
  // var title = $(deleteTr).text();
  // console.log(title);
  this.removeBookByTitle(title)
};

$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
