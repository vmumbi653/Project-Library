//create empty array to store book objects
let myLibrary = [];

const newBookBtn = document.getElementById('newBook');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submit');

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
function addBookToLibrary() {

    let newBook = new Book(title.value, author.value, pages.value);
    //push book object itself to array
   myLibrary.push(newBook);
}


const book1 = new Book ('The Bat', 'Jo Nesbo', '425');
// const book2 = new Book ('Purple Panties', 'Zane', '200', 'Not read');
// const book3 = new Book ('The Kite Runner', 'Khaled Hossein', '371', 'read');
// const book4 = new Book ('The Litigators', 'John Grisham', '470', 'not read');
// const book5 = new Book ('The Killing', 'David Hewson', '707', 'read');
// const book6 = new Book ('The Killing II', 'David Hewson', '539', 'read');

myLibrary.push(book1);
// book2.addBookToLibrary();
// book3.addBookToLibrary();
// book4.addBookToLibrary();
// book5.addBookToLibrary();
// book6.addBookToLibrary();

//test new book object is stored in array//
console.log(myLibrary);

const container = document.querySelector('.card-container');
let content;


    myLibrary.forEach((newBook) => {
        const card = document.createElement('div');
        card.classList.add('card');

            //creeate a multi-line string called content that containes the HTML Markup for each card layout
         content = `
            <div class = 'card-body'>
             <h4> ${newBook.title}</4>
              <p>${newBook.author}</p>
              <p>${newBook.pages}</p>
            </div>

           `;
           container.innerHTML += content;

    });

    //button shows the dialog modally
    newBookBtn.addEventListener("click", () => {
        dialog.showModal();
    });


    
//    function submitWorks(event) {
//     event.preventDefault();
//     const form = document.getElementById('form');

    const form = document.getElementById('form');
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        addBookToLibrary();

        dialog.close();

    })


//create a remove button
  const cardBodies = document.getElementsByClassName('card-body');

  Array.from(cardBodies).forEach((cardBody) => {
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = "Remove";
    cardBody.appendChild(removeBtn);

  });

  const removeBtns = document.querySelectorAll('.removeBtn');

  