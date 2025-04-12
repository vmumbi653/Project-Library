//create empty array to store book objects
let myLibrary = [];

const newBookBtn = document.getElementById('newBook');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('form');
const toggleBtn = document.querySelectorAll('.toggle');

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');



//create book constructor
function Book(title, author, pages, read=false) {
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); //add random UUID to each book

    this.BookId = `book${++Book.id}`;

}
Book.id = 0;


function bookInfo() {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let newBook = new Book(title.value, author.value, pages.value);
        myLibrary.push(newBook);
        //to reset form after submission
        form.reset();
        dialog.close();

        addBookToLibrary();
    }
    )};
    bookInfo();

function addBookToLibrary(book) {
    container.innerHTML = '';
    for(let i = 0; i < myLibrary.length; i++) {
        bookDisplay(myLibrary[i]);
    }
    console.log("Book object in addBookToLibrary:", book); // Check the book object here
}

//test new book object is stored in array//
console.log(myLibrary);

const container = document.querySelector('.card-container');

    function bookDisplay(book) {
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    //create elements for book properties
    const title = document.createElement('h4');
    title.textContent = `${book.title}`;
    cardBody.appendChild(title);

    const author = document.createElement('p');
    author.textContent = `written by ${book.author}`;
    cardBody.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    cardBody.appendChild(pages);

    //create remove button
    const removeBtn = document.createElement('button');
    cardBody.appendChild(removeBtn);
    removeBtn.textContent = "Remove";
    removeBtn.onclick = removeBook;
    removeBtn.setAttribute('data-id', book.id);

    removeBtn.setAttribute('class', 'bookId');

    //create read status button
    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('toggle'); 
    toggleBtn.textContent = book.read ? "Read" : "Not Read";
    toggleBtn.type = 'button';
    toggleBtn.setAttribute("data-id", book.id);
   
    cardBody.appendChild(toggleBtn);

    //event listener for toggeBtn
    toggleBtn.addEventListener('click', () => {
        toggleStatus(book.id);
    })

    card.appendChild(cardBody);
    container.appendChild(card);
    // container.innerHTML +=content;
};

//button shows the dialog modally
newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

//create a remove book function

function removeBook() {
    const bookId = this.parentElement.classList[1];

    const findBook = myLibrary.findIndex((element) => element.bookId === bookId);

    const deleteBook = myLibrary.splice(findBook, 1);
    this.parentElement.remove()

}
bookDisplay();


function toggleStatus(bookId) {
    const book = myLibrary.find(book =>book.id === bookId);

    if(book) {
        book.read = !book.read;
        addBookToLibrary(); //re-render the list
    }


}


//  const book1 = new Book ('The Bat', 'Jo Nesbo', '425');
// const book2 = new Book ('Purple Panties', 'Zane', '200');
// const book3 = new Book ('The Kite Runner', 'Khaled Hossein', '371');
// const book4 = new Book ('The Litigators', 'John Grisham', '470');
// const book5 = new Book ('The Killing', 'David Hewson', '707');
// const book6 = new Book ('The Killing II', 'David Hewson', '539');

// myLibrary.push(book1);
// myLibrary.push(book2);
// myLibrary.push(book3);
// myLibrary.push(book4);
// myLibrary.push(book5);
// myLibrary.push(book6);

// console.log(myLibrary);

  


  