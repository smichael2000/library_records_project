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
  console.log('made it to _createRow');
  var tr = document.createElement('tr');
  var deleteInput = document.createElement('input');
  var att = document.createAttribute("type");
  att.value = "checkbox";
  deleteInput.setAttributeNode(att);

  for(var key in book){
    var td = document.createElement('td');
    $(td).text(book[key]);
    tr.append(td);
  }
  console.log(td);
  // tr.append(document.createElement('td').append(deleteInput));
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

  // var edit = document.createElement('th');
  //
  // thr.append(edit);
  // tr.append(document.createElement('td').append(deleteInput));
  return theader;
};

$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
