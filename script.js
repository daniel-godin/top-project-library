// DOM connected variables:
const addBookButton = document.getElementById('addBookButton'); // This button shows/hides the form to allow the user to add a book to their library.
const backToLibraryButton = document.getElementById('backToLibraryButton');
const formContainer = document.getElementById('formContainer');
const booksContainer = document.getElementById('booksContainer');
const myLibraryContainer = document.getElementById('myLibraryContainer');
const addBookForm = document.getElementById('addBookForm');
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
const btnChangeReadStatus = document.getElementsByClassName('btn-change-read-status');

// eventListeners.  Activated at the end of the script.
function eventListeners() {
  addBookButton.addEventListener("click", showLibraryOrForm);
  backToLibraryButton.addEventListener('click', showLibraryOrForm);
  submitBookFormButton.addEventListener('click', showLibraryOrForm);
  submitBookFormButton.addEventListener('click', addBookToLibrary);
  // for (i = 0; i < btnDeleteBook.length; i++) {
  //   btnDeleteBook[i].addEventListener('click', deleteBookFromLibrary);
  // }
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
  },
  {
    bookId: 2,
    title: 'The Lost Fleet: Dauntless',
    author: 'Jack Campbell',
    pages: 293,
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
  resetLibraryDOM(); // Function to clear any remaining child elements of the library div container in the DOM.
  for (i = 0; i < arr.length; i++) {
    let bookId = arr[i].bookId;
    let bookTitle = arr[i].title;
    let bookAuthor = arr[i].author;
    let bookPages = arr[i].pages;
    let bookStatus = arr[i].read;
    
    myLibraryContainer.insertAdjacentHTML('afterbegin', 
      `<div class='book-item-container'>
        <p><span class='book-descriptor'>Book Title:</span>  <span class='book-info'>${bookTitle}</span></p>
        <p><span class='book-descriptor'>Book Author:</span>  <span class='book-info'>${bookAuthor}</span></p>
        <p><span class='book-descriptor'>Number of Pages:</span>  <span class='book-info'>${bookPages}</span></p>
        <p><span class='book-descriptor'>Read Status:</span>  <span class='book-info'>${bookStatus}</span><button class='btn-change-read-status' data-read-status-btn-id='${bookId}'>Change Status</button></p>
        <!-- Possibly Add Buttons To "Share, Save, etc." -->
        <button class='btn-delete-book' data-delete-btn-id='${bookId}'>Delete From Library</button>
      </div>`
    );
  }
  for (i = 0; i < btnDeleteBook.length; i++) { // Adds an event listener to every delete button.  Is there a way to add this to the previous for loop?
    btnDeleteBook[i].addEventListener('click', deleteBookFromLibrary);
  }
  for (i = 0; i < btnChangeReadStatus.length; i++) { // Adds an event listener to every change read status button.  Is there a way to add this to the previous for loop?
    btnChangeReadStatus[i].addEventListener('click', changeReadStatus);
  }
}

function Book(bookId, title, author, pages, read) {
  this.bookId = bookId,
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
  }

function addBookToLibrary(event) {
  let arr = myLibrary;
  let bookId = arr.length;
  let title = document.getElementById('addBookTitle').value;
  let author = document.getElementById('addBookAuthor').value;
  let pages = Number(document.getElementById('addBookPages').value);
  let read = document.querySelector("input[name='read-status']:checked").value;
  
  let newBook = new Book(bookId, title, author, pages, read); // Book Constructor.  Makes newBook into an Object, then I push it into the array.

  arr.push(newBook); // adds a new Object into the array (myLibrary)
  console.table(arr); // checking to see if array receives the new book

  addBookForm.reset();
  event.preventDefault(); // prevents the submit button from trying to send data to a server.  Keeps it local.

  createLibraryInDOM(myLibrary);
  // eventListeners();
}

function resetLibraryDOM() { // Function to remove all book elements in the DOM.  Used to clear out before repopulating.  Prevents duplicates.
  while (myLibraryContainer.firstChild) { // Removes all child nodes of the library (does not delete anything in the array myLibrary)
    myLibraryContainer.removeChild(myLibraryContainer.firstChild);
  }
}

function deleteBookFromLibrary() {
  let arr = myLibrary;
  let btnBookId = Number(this.dataset.deleteBtnId);
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
  createLibraryInDOM(myLibrary);
  eventListeners()
}

function changeReadStatus() { // NEED TO FIX THIS TO MAKE A POPUP TO CHOOSE.  FOR NOW IT JUST CHANGES TO READ OR NOT READ.
  let arr = myLibrary;
  let btnId = Number(this.dataset.readStatusBtnId);
  console.log(btnId);
  for (i = 0; i < arr.length; i++) {
    if (btnId === arr[i].bookId) {
      if (arr[i].read === "Read") {
        arr[i].read = "Not Read";
        break;
      } else if (arr[i].read === "Not Read") {
        arr[i].read = "Read";
        break;
      } else {
        console.log("Book Not Found");
      }
    }
  }
  createLibraryInDOM(myLibrary);
  eventListeners()
}

// Functions that run on load
createLibraryInDOM(myLibrary);
eventListeners(); // Always have this last.