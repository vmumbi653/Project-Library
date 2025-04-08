//create empty array to store book objects
let myLibrary = [];

const newBookBtn = document.getElementById('newBook');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('form');


const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');




//create book constructor
function Book(title, author, pages) {
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID(); //add random UUID to each book
  

}

function bookInfo() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let newBook = new Book(title.value, author.value, pages.value);

        myLibrary.push(newBook);
        dialog.close();

        addBookToLibrary();
    }
    )};
    bookInfo();

function addBookToLibrary() {
    container.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        bookDisplay(myLibrary[i]);
    }

//    let newBook = new Book(title.value, author.value, pages.value);
    //push book object itself to array
//    myLibrary.push(newBook);
}


const book1 = new Book ('The Bat', 'Jo Nesbo', '425');
const book2 = new Book ('Purple Panties', 'Zane', '200');
const book3 = new Book ('The Kite Runner', 'Khaled Hossein', '371');
const book4 = new Book ('The Litigators', 'John Grisham', '470');
// const book5 = new Book ('The Killing', 'David Hewson', '707', 'read');
// const book6 = new Book ('The Killing II', 'David Hewson', '539', 'read');

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4)
// book5.addBookToLibrary();
// book6.addBookToLibrary();

//test new book object is stored in array//
console.log(myLibrary);

const container = document.querySelector('.card-container');
// let content;

    function bookDisplay(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    //create elements for book properties
    const title = document.createElement('h4');
    title.textContent = book.title;
    cardBody.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `written by ${book.author}`;
    cardBody.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    cardBody.appendChild(pages);

    // cardBody.appendChild(title);
    // cardBody.appendChild(author);
    // cardBody.appendChild(pages);


    card.appendChild(cardBody);

    container.appendChild(card);


    // container.innerHTML +=content;

};

// // Iterate through the myLibrary array and display each book
// function displayAllBooks() {
//     container.innerHTML = ''; // Clear existing content
//     myLibrary.forEach(book => {
//       bookDisplay(book);
//     });
//   }
  
//   // Call displayAllBooks to display the books
//   displayAllBooks();

    // myLibrary.forEach((Book) => {
    //     const card = document.createElement('div');
    //     card.classList.add('card');

    //         //creeate a multi-line string called content that containes the HTML Markup for each card layout
    //      content = `
    //         <div class = 'card-body'>
    //          <h4> ${Book.title}</4>
    //           <p>${Book.author}</p>
    //           <p>${Book.pages}</p>
    //         </div>

    //        `;
    //        container.innerHTML += content;

    // });

    //button shows the dialog modally
    newBookBtn.addEventListener("click", () => {
        dialog.showModal();
    });


    // form.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     addBookToLibrary();
    //     dialog.close();
    // });


//create a remove button
  const cardBodies = document.getElementsByClassName('card-body');

  Array.from(cardBodies).forEach((cardBody) => {
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = "Remove";
    cardBody.appendChild(removeBtn);

  });

  const removeBtns = document.querySelectorAll('.removeBtn');

  