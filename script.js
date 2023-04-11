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
const btnDeleteBook = document.getElementsByClassName('btn-delete-book');

// Function and event listners to hide/show form div or library display div
addBookButton.addEventListener("click", showLibraryOrForm);
backToLibraryButton.addEventListener('click', showLibraryOrForm);
submitBookFormButton.addEventListener('click', showLibraryOrForm);
submitBookFormButton.addEventListener('click', addBookToLibrary);

Array.from(btnDeleteBook).forEach((btnDeleteBook) => {
  btnDeleteBook.addEventListener('click', () => {
    console.log("Delete Button is Working");
    // arr = myLibrary;
    // let delBookId = btnDeleteBook.parentElement.dataset.bookId;
    // console.log(delBookId);
    // arr.splice(delBookId, 1);
    // createLibraryInDOM(arr);
    // // btnDeleteBook.parentNode.remove();
  });
});



// myLibrary Array of Objects
let myLibrary = [
  {
    bookId: 1,
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    pages: 295,
    read: 'not read yet',
  },
  {
    bookId: 2,
    title: 'The Name Of The Wind',
    author: 'Patrick Rothfuss',
    pages: 662,
    read: 'read',
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
  for (i = arr.length - 1; i >= 0; i--) {
    let bookTitle = arr[i].title;
    let bookAuthor = arr[i].author;
    let bookPages = arr[i].pages;
    let bookStatus = arr[i].read;
    let bookIdNumber = arr[i].bookId;
    
    myLibraryContainer.insertAdjacentHTML('beforeend', 
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

// Displays 0 through n of myLibrary array in left navigation list.  Later:  Sorts by date added.
function createRecentlyAddedBooksList(arr) {
  arr = myLibrary;
  for (i = arr.length - 1; i >= 0; i--) {
    let recentBookTitle = arr[i].title;
    recentlyAddedBooksList.insertAdjacentHTML('beforeend', `<li class='book-link'>${recentBookTitle}</li>`); // Adds a list item as the first child under <ul class="recently-added-books-list">
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
  let bookId = arr.length + 1;
  
  let newBook = new Book(bookId, title, author, pages, read);

  reset();

  // while (myLibraryContainer.firstChild) { // Removes all child nodes of the library (does not delete anything in the array myLibrary)
  //   myLibraryContainer.removeChild(myLibraryContainer.firstChild);
  // }
  arr.push(newBook); // adds a new Object into the array (myLibrary)
  createLibraryInDOM(arr);
  createRecentlyAddedBooksList(arr);
  event.preventDefault(); // prevents the submit button from trying to send data to a server.  Keeps it local.
}

function reset() {
  while (recentlyAddedBooksList.firstChild) {
    recentlyAddedBooksList.removeChild(recentlyAddedBooksList.firstChild);
  }
  while (myLibraryContainer.firstChild) { // Removes all child nodes of the library (does not delete anything in the array myLibrary)
    myLibraryContainer.removeChild(myLibraryContainer.firstChild);
  }
}

// function deleteBookFromLibrary(arr) {
//   arr = myLibrary;
//   let delBookId = this.dataset.bookId;
//   console.log(delBookId);
  
// }

// Functions that run on load
createRecentlyAddedBooksList(myLibrary); // Function runs on load, and also I'll trigger it after submitting a new book.
createLibraryInDOM(myLibrary);