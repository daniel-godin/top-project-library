// DOM connected variables:
const addBookButton = document.getElementById('addBookButton'); // This button shows/hides the form to allow the user to add a book to their library.
const backToLibraryButton = document.getElementById('backToLibraryButton');
const formContainer = document.getElementById('formContainer');
const booksContainer = document.getElementById('booksContainer');
const myLibraryContainer = document.getElementById('myLibraryContainer');
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
const btnDeleteBook = document.getElementsByClassName('btn-delete-book');

// eventListeners.  Activated at the end of the script.
function eventListeners() {
  addBookButton.addEventListener("click", showLibraryOrForm);
  backToLibraryButton.addEventListener('click', showLibraryOrForm);
  submitBookFormButton.addEventListener('click', showLibraryOrForm);
  submitBookFormButton.addEventListener('click', addBookToLibrary);
  for (i = 0; i <= btnDeleteBook.length - 1; i++) {
    btnDeleteBook[i].addEventListener('click', deleteBookFromLibrary);
  }
}

// myLibrary Array of Objects
let myLibrary = [
  {
    bookId: 0,
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: 295,
    read: 'Not Read',
  },
  {
    bookId: 1,
    title: 'The Name Of The Wind',
    author: 'Patrick Rothfuss',
    pages: 662,
    read: 'Read',
  }
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
  for (i = 0; i <= arr.length - 1; i++) {
    let bookTitle = arr[i].title;
    let bookAuthor = arr[i].author;
    let bookPages = arr[i].pages;
    let bookStatus = arr[i].read;
    let bookIdNumber = arr[i].bookId;
    
    myLibraryContainer.insertAdjacentHTML('afterbegin', 
      `<div class='book-item-container' data-book-id='${bookIdNumber}'>
        <p><span class='book-descriptor'>Book Title:</span>  <span class='book-info'>${bookTitle}</span></p>
        <p><span class='book-descriptor'>Book Author:</span>  <span class='book-info'>${bookAuthor}</span></p>
        <p><span class='book-descriptor'>Number of Pages:</span>  <span class='book-info'>${bookPages}</span></p>
        <p><span class='book-descriptor'>Read Status:</span>  <span class='book-info'>${bookStatus}</span></p>
        <!-- Possibly Add Buttons To "Share, Save, etc." -->
        <button class='btn-delete-book' data-book-id='${bookIdNumber}'>Delete From Library</button>
      </div>`
    );
  }
}

function Book(bookId, title, author, pages, read) {
  this.bookId = bookId,
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
  }

function addBookToLibrary(event, arr) {
  arr = myLibrary;
  let title = document.getElementById('addBookTitle').value;
  let author = document.getElementById('addBookAuthor').value;
  let pages = document.getElementById('addBookPages').value;
  let read = document.getElementById('addBookTitle').value;
  let bookId = arr.length;
  
  let newBook = new Book(bookId, title, author, pages, read);

  reset(); // Function to reload my recent books list and library from Array.  If I don't do this, it creates duplicates.  I could potentially check if somethign already exists and not add it, later.
  arr.push(newBook); // adds a new Object into the array (myLibrary)
  // createLibraryInDOM(arr);
  // createRecentlyAddedBooksList(arr);
  eventListeners();
  event.preventDefault(); // prevents the submit button from trying to send data to a server.  Keeps it local.
}

function reset() { // Function to reload recent books list and library from the array(myLibrary)
  while (myLibraryContainer.firstChild) { // Removes all child nodes of the library (does not delete anything in the array myLibrary)
    myLibraryContainer.removeChild(myLibraryContainer.firstChild);
  }
  createLibraryInDOM(myLibrary);
}

function deleteBookFromLibrary() {
  let arr = myLibrary;

  let btnBookId = Number(this.dataset.bookId);
  console.log(btnBookId);

  for (i = 0; i < arr.length; i++) {
    
    if (btnBookId === arr[i].bookId) {
      
      console.log("book found");
      arr.splice(i, 1);
      break;
    } else {
      console.log("book not found to delete");
    }
  }






  // let bookId = this.parentElement.dataset.bookId - 1;
  // console.log(`bookId is ${bookId}`);
  // // loop through array, searching Object.bookId to match parentElement.dataset.bookId.
  // for (i = 0; i <= arr.length - 1; i++) {
  //   if (arr[i].bookId === bookId) {
  //     arr.splice(i, 1);
  //   } else {
  //     console.log('No Book Found');
  //   }
  // }
  // reset();
  createLibraryInDOM(myLibrary);

  eventListeners()
}

// Functions that run on load
createLibraryInDOM(myLibrary);


eventListeners(); // Always have this last.