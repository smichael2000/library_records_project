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
  var tdXEd = document.createElement('td');
  var deleteBtn = document.createElement('input');
  tdXEd.append(deleteBtn);
  $(tdXEd).data('data-title', book.title);
  deleteBtn.setAttribute('type','button');
  deleteBtn.setAttribute('value','X');
  deleteBtn.setAttribute('class','deleteBtn');

  var editBtn = document.createElement('button');
  tdXEd.append(editBtn);
  var trEditText = document.createTextNode("Edit");
  editBtn.setAttribute("name",name);
  editBtn.appendChild(trEditText);
  $(editBtn).attr("id", "editBtn")
  tr.append(tdXEd);
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

  var delEdit = document.createElement('th');
  thr.append(delEdit);
  $(delEdit).text('Delete/Edit')
  return theader;
};

DataTable.prototype._deleteRow = function (e) {
  // console.log("delete button worked");
  // console.log($(e.currentTarget).closest('tr').children()[1]);
  var deleteTr = $(e.currentTarget).closest('tr').children()[1];
  var title = $(deleteTr).data('title');
  console.log(title);
  this.removeBookByTitle(title)
};

$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
