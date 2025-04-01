//create empty array to store book objects
const myLibrary = [];

//create book constructor
function Book(title, author, pages, read) {
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBookToLibrary = function() {
    console.log(`${this.title} written by ${this.author} with ${this.pages} and I have ${this.read}`);
}

const book1 = new Book ('the Bat', 'Jon Nesbo', '245', 'read');

book1.addBookToLibrary();