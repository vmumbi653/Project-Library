//create empty array to store book objects
let myLibrary = [];

//create book constructor
function Book(title, author, pages, read) {
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function() {
   return myLibrary = (`${this.title}, written by ${this.author}, ${this.pages} pages, ${this.read}`);
}

const book1 = new Book ('The Bat', 'Jon Nesbo', '245', 'read');

book1.addBookToLibrary();

//test new book object is stored in array//
console.log(myLibrary);