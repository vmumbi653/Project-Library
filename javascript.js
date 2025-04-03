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

const book1 = new Book ('The Bat', 'Jo Nesbo', '425', 'read');
const book2 = new Book ('Purple Panties', 'Zane', '200', 'Not read');
const book3 = new Book ('The Kite Runner', 'Khaled Hossein', '371', 'read');
const book4 = new Book ('The Litigators', 'John Grisham', '470', 'not read');
const book5 = new Book ('The Killing', 'David Hewson', '707', 'read');
const book6 = new Book ('The Killing II', 'David Hewson', '539', 'read');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();
book4.addBookToLibrary();
book5.addBookToLibrary();
book6.addBookToLibrary();

//test new book object is stored in array//
console.log(myLibrary);

const container = document.querySelector('.card-container');

// function displayBooks() {
//    const card =  document.createElement('div');
//    card.classList.add('card');
//    container.appendChild(card);

// }

//for loop function
// for(let i=0; i<=myLibrary.length; i++) {
//     console.table(myLibrary);
// }

// function displayBooks() {
// myLibrary.forEach((myLibrary) => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     container.appendChild(card);
//     card.textContent = myLibrary.toString();

// });
// }

// displayBooks();

    // for(let i=0; i<myLibrary.length; i++) {
    //         const card = document.createElement('div');
    //         card.classList.add('card');
    //         card.textContent = `${myLibrary[i].title}; ${myLibrary[i].author}; ${myLibrary[i].pages}; ${myLibrary[i].read}`;
    //         container.appendChild(card);
    // }


    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.classList.add('card');

            //creeate a multi-line string called content that containes the HTML Markup for each card layout
        const content = `
            <div class = 'card-body'>
              <h4>${book.title}</h4>
              <p>${book.author}</p>
              <p>${book.pages}</p>
              <p>${book.read}</p>
            </div>

           `;
           container.innerHTML += content;
    })