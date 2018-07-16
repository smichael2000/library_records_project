// var bookShelf= new Array();
//************ connects to library_fuxns.js - checks for books already in library before adding
var noDups = function (book) {
  // console.log(window.bookShelf, 'noDup func');
  if (book){
    for (var i = 0; i < window.bookShelf.length; i++) {
      if (window.bookShelf[i].title === book.title) {
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
