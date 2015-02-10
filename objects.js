// task
var Book = function(
  title, 
  description) {
  this.title = title;
  this.description = description;
}


var book1 = new Book(
  "book 1", 
  "description 1");

var book2 = new Book(
  "book 2", 
  "description 2");

var book3 = new Book(
  "book 3", 
  "description 3");

var cjBooks = [];
cjBooks.push(book1);
cjBooks.push(book2);
cjBooks.push(book3);

var Books = function(books) {
  this.books = books || [];
}
 
Books.prototype.addBook = function(book) {
  this.books.push(book);
}

var myBooks = new Books(cjBooks);

for (var i=0; i<myBooks.books.length; i++)
  document.write(myBooks.books[i].title);
// console.log will show 4 books instead of 3 books
// why? don't know
// console.log("3 books:", myBooks); 

var book4 = new Book(
  "book 4",
  "descirption 4"
  );

myBooks.addBook(book4);
for (var i=0; i<myBooks.books.length; i++)
  document.write(myBooks.books[i].title);

// console.log("4 books:", myBooks);




