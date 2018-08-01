

//**************** Constructor*************
var Library = function(){
};

//**************** Functions **************
Library.prototype.addobject = function (object) {
  // console.log(object, "object in addobject");

  if (noDups(object)){// noDups fuxn in util.js
    $.ajax({
    url: window.libraryURL,
    dataType: 'json',
    method: 'POST',
    data: object,
    success: data => {
      // console.log(data, "response data");
      var myobject = new object(data);
      window._objectShelf.push(myobject);
      // console.log(myobject, "myobject");
      this._handleEventTrigger("searchEvent", window._objectShelf);
    }
    })
  }
};

Library.prototype.removeobjectByTitle = function (title) {
  //Purpose: Remove object from from the objects array by its title.
  // console.log(title);
  var originalLength = window._objectShelf.length;
  for(var i = 0; i<window._objectShelf.length; i++){
    // console.log('inside for loop');
    // console.log(window._objectShelf[i].title);
    if (window._objectShelf[i].title === title) {
      // alert(window._objectShelf[i].title, + " has been deleted")
      var id = window._objectShelf[i]._id;
    // if (window._objectShelf[i].title.indexOf(title) > -1) {
      window._objectShelf.splice(i,1);
      // --i; // Correct the index value due to splice()
      // console.log(id);
      this._handleEventTrigger("objUpdate", window._objectShelf);
      this.deleteobject(id);
    }
  }
};

Library.prototype.removeobjectByAuthor = function (author) {
  //Remove a specific object from your objects array by the author name.
  //Return: boolean true if the object(s) were removed, false if no objects match
  // console.log(' made it to removeobjectByAuthor fuxn');
  var originalLength = window._objectShelf.length;
  for(var i = 0; i < window._objectShelf.length; i++){
    if (window._objectShelf[i].author === author) {
    // if (window._objectShelf[i].author.indexOf(authorName >-1)) {
      var id = window._objectShelf[i]._id;
      window._objectShelf.splice(i,1);
      --i; // Correct the index value due to splice()
      this.deleteobject(id);
    }
  }
  if (originalLength != window._objectShelf.length) {
    // console.log (originalLength - window._objectShelf.length + " objects by the author, " + authorName + ", were removed from the library.");
    // alert("All the objects by " + window._objectShelf[i].author + " have been deleted")
    return true;
  } else {alert("There are no objects by that author in the library.")}
  return false;
};

Library.prototype.getRandomobject = function () {
  //Purpose: Return a random object object from your objects array
  //Return: object object if you find a object, null if there are no objects
  if (window._objectShelf.length == 0) {return null;}
  var ranBk = window._objectShelf[Math.floor(Math.random() * window._objectShelf.length)]._id;
  // console.log(ranBk, 'randomBk');
  return ranBk;
};

Library.prototype.getobjectByTitle = function (title) {
  //Purpose: Return all objects that completely or partially matches the string title passed into the function
  //Return: array of object objects if you find objects with matching titles, empty array if no objects are found
  var objectsByTitle = [];
  for(var i = 0; i<window._objectShelf.length; i++){
    // if (window._objectShelf[i].title.search(title)>= -1) {
    if (window._objectShelf[i].title === title) {
      // console.log(window._objectShelf[i].title, 'getobjectByTitle');
      objectsByTitle.push(window._objectShelf[i]);
    }
  }

  console.log(objectsByTitle);
  return objectsByTitle;
};

Library.prototype.getOneobjectByTitle = function (title) {
  //Purpose: Return all objects that completely or partially matches the string title passed into the function
  //Return: array of object objects if you find objects with matching titles, empty array if no objects are found
  var objectsByTitle = {};
  for(var i = 0; i<window._objectShelf.length; i++){
    // if (window._objectShelf[i].title.search(title)>= -1) {
    if (window._objectShelf[i].title === title) {
      // console.log(window._objectShelf[i].title, 'getOneobjectByTitle');
      objectsByTitle = window._objectShelf[i];
    }
  }
  console.log(objectsByTitle);
  return objectsByTitle;
};

Library.prototype.getobjectsByAuthor = function (authorName) {
//Purpose: Finds all objects where the author’s name partially or completely matches the authorName argument passed
//to the function.
  var objectsByAuthor = [];
  for(var i = 0; i<window._objectShelf.length; i++){
    // if (window._objectShelf[i].author.search(authorName>=0)){
    if (window._objectShelf[i].author === authorName) {
      // console.log(window._objectShelf[i]);
      objectsByAuthor.push(window._objectShelf[i]);
    }
  }

  // if (objectsByAuthor.length <= 0) {
  //   console.log("There are no objects by " + authorName);
  //
  // }
  // console.log(objectsByAuthor);
  return objectsByAuthor;
};

Library.prototype.addobjects = function (objects) {
  //Purpose: Takes multiple objects, in the form of an array of object objects, and adds the objects to your objects array.
  //Return: number number of objects successfully added, 0 if no objects were added
  // console.log("i am in addobjects");
  var originalLength = window._objectShelf.length;
  // console.log(typeof objects);
  // console.log(objects);
  if (Array.isArray(objects)) {
    for (var i = 0; i < objects.length; i++) {
        this.addobject(objects[i]);
    }
  }
  // console.log('addobjects works');
  var numAddedBks = window._objectShelf.length - originalLength;
  // console.log(numAddedBks + " objects were added to the library.");
  return (window._objectShelf, numAddedBks);
};

Library.prototype.getDistinctAuthors = function () {
  //Purpose: Find the distinct authors’ names from all objects in your library
  //Return: array of strings the names of all distinct authors, empty array if no objects exist or if no authors exist
  var authors = [];
  for(var i = 0; i<window._objectShelf.length; i++){
    authors.push(window._objectShelf[i].author);
  }
  // console.log(authors);
  var uniqueAuthors = Array.from(new Set(authors));
  // console.log(uniqueAuthors, 'uniqueAuthors');
  return uniqueAuthors;
};

Library.prototype.getRandomAuthorNames = function () {
  //Purpose: Retrieves a random author name from your objects collection
  //Return: string author name, null if no objects exist
  if (window._objectShelf.length == 0) {return ("Null");}
  return this.getRandomobject();

};

Library.prototype.saveEditedobject = function (object) {

  console.log('inside edit object function');
  console.log(object._id);
  object._id = object['edit-id']
  console.log(object._id);
  object.title=$("#editTitle").val()
  object.author=$("#editAuthor").val()
  object.numPages=$("#editNumPages").val()
  object.yearPublished=object['edit-pubDate']
  object.genre=object['edit-genre']
  object.cover=$("#editCover").val()

  var book=new Book(object);
  console.log(book);

  // delete object['edit-id']
  // delete object['edit-title']
  // delete object['edit-author']
  // delete object['edit-pubDate']
  // delete object['edit-numPages']
  // delete object['edit-genre']

  // console.log(object);

  this.updateEditedobject(book);

// this._handleEventTrigger('objUpdate'); //this updates my table yours might be different
};

Library.prototype.getBkById = function (object) {
    var randomobject = $.ajax({
        url: window.libraryURL + '/' + id,
        dataType: "json",
        method: 'GET',
        // data: id,
        success: data => {
        console.log(data, "response data")
        // var object = new object(data);
        // console.log(object, 'object in getBkById');
        return object;
        }
    })
    return randomobject;
  };

Library.prototype.updateobject = function (object) {
  $.ajax({
  url: window.libraryURL,
  dataType: 'json',
  method: 'PUT',
  data: object,
  success: data => {
    console.log(data, "response data");
    this._handleEventTrigger("searchEvent", window._objectShelf);
    }
  })
};

Library.prototype.updateEditedobject = function (object) {
  console.log("in updateEDITEDobject");
  console.log(object);
  $.ajax({
  url: window.libraryURL +'/' + object._id,
  dataType: 'json',
  method: 'PUT',
  data: object,
  success: data => {
    console.log(data, "response data");
    this._handleEventTrigger("searchEvent", window._objectShelf);
    }
  })
};

Library.prototype.deleteobject = function (id) {
    // console.log('inside deleteobject');
    $.ajax({
        url: window.libraryURL + "/" + id,
        dataType: "text",
        method: 'DELETE',
        data: id,
        success: data => {
          // console.log(data, "response data");
          this._handleEventTrigger("searchEvent", window._objectShelf);
        }
    })
  };



//*******************Search Function*********************
//Purpose: Add a more robust search function to your app to allow you to filter by one or more object properties ○n the search function
//Return: an array of object instances
Library.prototype.search = function (string) {
  var result = (this.getobjectByTitle(string)).concat(this.getobjectsByAuthor(string));
  // console.log(result, 'result');
  return result;
};

//************************ Creating event "" *****************************
Library.prototype._handleEventTrigger = function(sEvent, oData) {
 var oData = oData || {}; //sets oData to an empty object if it does not have data
 // console.log("oData")
 // console.log(oData);
 if (sEvent) {
   var event = new CustomEvent(sEvent, {"detail":oData});
   document.dispatchEvent(event);
   // console.log(document.dispatchEvent(event), "dispatch");
 }
};
//*******************Local Storage**********************
//Stores data as strings - need to parse to convert back to objects when retrieve
//Purpose: Use localstorage and JSON.stringify to save the state of your library
// Library.prototype.saveobjects = function () {
//   // console.log(window._objectShelf, 'save objects');
//   console.log("setting storage");
//   localStorage.setItem('objects', JSON.stringify(window._objectShelf));
// };
//
// Library.prototype.retrieveobjects = function () {
//   var objects = JSON.parse(localStorage.getItem('objects'));
//   // console.log(objects, 'objectsStorage');
//   window._objectShelf = objects || [];
//   return window._objectShelf;
// };

Library.prototype.retrieveBksDb = function (){
  var _self=this;
  $.ajax ({
    url: window.libraryURL,
    dataType:'json',
    method: 'GET',
    success: (data) => {
      // console.log(data, "data");
      window._objectShelf=objectify(data);
      // console.log('_objectShelf, retrieveBksDb');
      // console.log(window._objectShelf);
      // console.log("i am here");
      // this._handleEventTrigger('searchEvent',window._objectShelf);
      _self._handleEventTrigger('searchEvent',window._objectShelf);
    }
  })
};

//*******************Singleton****************************
//Purpose: Make your library a singleton
//Note: A prototyped object class should also be made, with each ‘object’ in your library being an instance of the object class.

// function Singleton() {
//     // instance stores as reference to Singleton
//     var instance;
//
//     // Singleton
//     window.Singleton = function() {  // Added window. during code reviews
//         return instance;
//     };
//
//     instance = this;
//
//     this._objectShelf = [];
//    };
