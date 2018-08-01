//This file adds books to library to check functionality

var Book = function(args){
  // console.log(args, "beg bk construct");
  this._id = args._id;
  this.cover = args.cover || "cover image";
  this.title = args.title;
  this.author = args.author;
  this.numPages = args.numPages;
  this.yearPublished = new Date(args.yearPublished).getUTCFullYear();
  this.genre = args.genre;
  return false;
};



//************* Use gLibrary.addBook(newBook) or .addBooks(newBooks) ***************************
// var newBook = [
//   new Book("Of Mice and Men", "John Steinbeck", 132, "2-25-1939"),
// ];
//
// var newBooks = [
//   new Book("Catcher in the Rye", "J.D. Salinger", 277, "7-16-1951"),
//   new Book("The Undoing Project", "Michael Lewis", 368, "12-6-2016"),
//   new Book("The Graveyard Book", "Neil Gaiman", 312, "9-30-2008"),
//   new Book("The New New Thing", "Michael Lewis", 349, "10-17-1999"),
//   new Book ("IT", "Stephen King", 1138, "9-15-1986"),
//   new Book ("The Shining", "Stephen King", 447, "1-28-1977"),
//   new Book ("The Big Four", "Agatha Christie", 282, "1-27-1927"),
//   new Book ("A Thousand Acres", "Jane Smiley", 367, "10-23-1991"),
//   new Book ("To Kill a Mockingbird", "Harper Lee", 281, "7-11-1960"),
//   new Book ("The Shining", "Petra", 501, "9-28-1997"),//not adding as only unique titles included in library
//   new Book ("Holden Reincarnated", "Collin Taylor", 104, "4-16-2001")
// ];
