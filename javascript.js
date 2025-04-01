//create empty array to store book objects
let myLibrary = [];

//create book constructor
function Book(title, author, pages, read) {
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); //add random UUID to each book
}

Book.prototype.addBookToLibrary = function() {
    //push book object itself to array
   myLibrary.push(this);
}

const book1 = new Book ('The Bat', 'Jon Nesbo', '245', 'read');
const book2 = new Book ('Purple Panties', 'Zane', '200', 'NOT read');

book1.addBookToLibrary();
book2.addBookToLibrary();

//test new book object is stored in array//
console.log(myLibrary);