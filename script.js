// DOM connected variables:
const addBookButton = document.getElementById('addBookButton'); // This button shows/hides the form to allow the user to add a book to their library.
const backToLibraryButton = document.getElementById('backToLibraryButton');
const formContainer = document.getElementById('formContainer');
const booksContainer = document.getElementById('booksContainer');
const myLibraryContainer = document.getElementById('myLibraryContainer');
const recentlyAddedBooksList = document.getElementById('recentlyAddedBooksList');
// DOM connected form variables:
const addBookTitle = document.getElementById('addBookTitle');
const addBookAuthor = document.getElementById('addBookAuthor');
const addBookPages = document.getElementById('addBookPages');
const addBookStatusRead = document.getElementById('addBookStatusRead');
const addBookStatusNotRead = document.getElementById('addBookStatusNotRead');
const submitBookFormButton = document.getElementById('submitBookFormButton');
// Dom Connected Class Variables:
const bookItemContainer = document.getElementsByClassName('book-item-container');
const bookLink = document.getElementsByClassName('book-link');

// Function and event listners to hide/show form div or library display div
addBookButton.addEventListener("click", showLibraryOrForm);
backToLibraryButton.addEventListener('click', showLibraryOrForm);
submitBookFormButton.addEventListener('click', showLibraryOrForm);
submitBookFormButton.addEventListener('click', addBookToLibrary);

// myLibrary Array of Objects
let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: 295,
    read: 'not read yet',
  },
  {
    title: 'The Name Of The Wind',
    author: 'Patrick Rothfuss',
    pages: 662,
    read: 'read',
  },
];

// Function which toggles the "hidden" class to show/hide the library div or form div.
function showLibraryOrForm() {
  if (formContainer.classList.contains('hidden') && backToLibraryButton.classList.contains('hidden')) {
    formContainer.classList.toggle('hidden');
    backToLibraryButton.classList.toggle('hidden');
    booksContainer.classList.toggle('hidden');
    addBookButton.classList.toggle('hidden');
  } else if (booksContainer.classList.contains('hidden') && addBookButton.classList.contains('hidden')) {
    formContainer.classList.toggle('hidden');
    backToLibraryButton.classList.toggle('hidden');
    booksContainer.classList.toggle('hidden');
    addBookButton.classList.toggle('hidden');
  } else {
    console.log('Error, something is not working in your showLibraryOrForm function');
  }
}


// Function to loop through array and then display/create items in the DOM.
function createLibraryInDOM(arr) {
  arr = myLibrary;
  for (i = 0; i < arr.length; i++) {
    let bookTitle = arr[i].title;
    let bookAuthor = arr[i].author;
    let bookPages = arr[i].pages;
    let bookStatus = arr[i].read;
    
    myLibraryContainer.insertAdjacentHTML('beforeend', 
      `<div class='book-item-container'>
        <p><span class='book-descriptor'>Book Title:</span>  <span class='book-info'>${bookTitle}</span></p>
        <p><span class='book-descriptor'>Book Author:</span>  <span class='book-info'>${bookAuthor}</span></p>
        <p><span class='book-descriptor'>Number of Pages:</span>  <span class='book-info'>${bookPages}</span></p>
        <p><span class='book-descriptor'>Read Status:</span>  <span class='book-info'>${bookStatus}</span></p>
        <!-- Possibly Add Buttons To "Share, Save, etc." -->
        <button class='btn-delete-book'>Delete From Library</button>
      </div>`
    );
  }
}

// Displays 0 through n of myLibrary array in left navigation list.  Later:  Sorts by date added.
function createRecentlyAddedBooksList(arr) {
  arr = myLibrary;
  for (i = 0; i < arr.length; i++) {
    let recentBookTitle = arr[i].title;
    recentlyAddedBooksList.insertAdjacentHTML('afterbegin', `<li class='book-link'>${recentBookTitle}</li>`); // Adds a list item as the first child under <ul class="recently-added-books-list">
  }
}

// Example From Earlier lesson:
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
  // this.log = function() {
  //   console.log(`${title} written by ${author}.  It is ${pages} long, and you have ${read} this book.`)
}



function addBookToLibrary(event, arr) {
  arr = myLibrary;
  let title = document.getElementById('addBookTitle').value;
  let author = document.getElementById('addBookAuthor').value;
  let pages = document.getElementById('addBookPages').value;
  let read = document.getElementById('addBookTitle').value;
  
  let newBook = new Book(title, author, pages, read);

  while (myLibraryContainer.firstChild) { // Removes all child nodes of the library (does not delete anything in the array myLibrary)
    myLibraryContainer.removeChild(myLibraryContainer.firstChild);
  }
  arr.unshift(newBook); // adds a new Object into the array (myLibrary)
  createLibraryInDOM(arr);
  event.preventDefault(); // prevents the submit button from trying to send data to a server.  Keeps it local.
}

// Functions that run on load
createRecentlyAddedBooksList(myLibrary); // Function runs on load, and also I'll trigger it after submitting a new book.
createLibraryInDOM(myLibrary);