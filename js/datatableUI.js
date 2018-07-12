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
  console.log("update table works");
  var _self = this;
  var $tbody = this.$container.find('tbody');
  $tbody.empty();
  // if(window.bookShelf){
    // this.$container.find('#tHead').replaceWith(this._createHeader(window.bookShelf[0]));
    $.each(window.bookShelf, function(index, book){
    $tbody.append(_self._createRow(book));
  });
// } else {
//   alert('There are no books in your library.')
// }
  return $tbody;
};

DataTable.prototype._createRow = function (book) {
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
  // tr.append(document.createElement('td').append(deleteInput));
  return tr;
};

DataTable.prototype._createHeader = function (book) {
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  $(tr).addClass("thead-light");
  thead.append(tr);
  for(var key in book){
    var th = document.createElement('th');
    $(th).text(key);
    tr.append(th);
  }

  // tr.append(document.createElement('td').append(deleteInput));
  return th;
};

$(function(){
  window.gDataTable = new DataTable();
  window.gDataTable.init();
});
