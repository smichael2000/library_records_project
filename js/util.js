//creating global bookshelf
var _bookShelf= new Array();
var libraryURL = "http://127.0.0.1:3002/Library/";

//transforms array of objects from dB into books
var bookify = function(arr) {
  var tempArr = []
  for (var i = 0; i < arr.length; i++) {
    var myObj = new Object();
    for (var key in arr[i]) {
        myObj[key] = arr[i][key]
    }
    tempArr.push(new Book(myObj))
  }
  //console.log(tempArr);
  return tempArr
}

//************ connects to library_fuxns.js - checks for books already in library before adding
var noDups = function (book) {
  // console.log(window._bookShelf, 'noDup func');
  if (book){
    for (var i = 0; i < window._bookShelf.length; i++) {
      if (window._bookShelf[i].title === book.title) {
        alert('The book with the title ' + book.title + ' is already in the library.')
        return false;
      }
    } return true;
  }
};




// function reformatDate(){
//   //reformats reformat
//   if (!(date instanceof Date)){
//     console.log ("This is not a valid date");
//
//   }
// };
