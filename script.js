// DOM connected variables:
const addBookButton = document.getElementById('addBookButton'); // This button shows/hides the form to allow the user to add a book to their library.
const backToLibraryButton = document.getElementById('backToLibraryButton');
const formContainer = document.getElementById('formContainer');
const booksContainer = document.getElementById('booksContainer');
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
  for (i = 0; i <= arr.length; i++) {
    title = arr[i].title;
    author = arr[i].author;
    let book = title + " written by " + author;
    console.log(book);
  }
  
}

createLibraryInDOM(myLibrary);




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




// console.log(theHobbit.info());