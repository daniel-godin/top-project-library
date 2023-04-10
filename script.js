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







// Example From Earlier lesson:
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

// Function to hide/show form div or library display div
addBookButton.addEventListener("click", showLibraryOrForm);
backToLibraryButton.addEventListener('click', showLibraryOrForm);
submitBookFormButton.addEventListener('click', showLibraryOrForm);
submitBookFormButton.addEventListener('click', Book);

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

// Probably need to pass arguments from createLibraryInDOM().  title, book, etc.
// This function is to create the html needed for a new book tile.  I have hardcoded it for now in the HTML.
function createBookTile(arr) {
  arr = myLibrary;
}

// createLibraryInDOM(myLibrary);

// Displays 0 through n of myLibrary array in left navigation list.  Later:  Sorts by date added.
function createRecentlyAddedBooksList(arr) {
  arr = myLibrary;
  for (i = 0; i < arr.length; i++) {
    let recentBookTitle = arr[i].title;
    recentlyAddedBooksList.insertAdjacentHTML('afterbegin', `<li class='book-link'>${recentBookTitle}</li>`); // Adds a list item as the first child under <ul class="recently-added-books-list">
  }
}


function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function() {
      return `${title} by ${author}, ${pages} pages, ${read}.`
  }
}

function addBookToLibrary(event) {
  let title = document.getElementById('addBookTitle').value;
  let author = document.getElementById('addBookAuthor').value;
  let pages = document.getElementById('addBookPages').value;
  let read = document.getElementById('addBookTitle').value;
  
  const newBook = new Book(title, author, pages, read);

  myLibrary.unshift(newBook);
  
  
  
  
  
  
  
  
  event.preventDefault();

  //





  return console.log(`${title} written by ${author} is ${pages} long.`);
}



// Functions that run on load
createRecentlyAddedBooksList(myLibrary); // Function runs on load, and also I'll trigger it after submitting a new book.
createLibraryInDOM(myLibrary);