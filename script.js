// DOM connected variables:
const addBookButton = document.getElementById('addBookButton'); // This button shows/hides the form to allow the user to add a book to their library.
const formContainer = document.getElementById('formContainer');
const booksContainer = document.getElementById('booksContainer');
// DOM connected form variables:
const addBookTitle = document.getElementById('addBookTitle');
const addBookAuthor = document.getElementById('addBookAuthor');
const addBookPages = document.getElementById('addBookPages');
const addBookStatusRead = document.getElementById('addBookStatusRead');
const addBookStatusNotRead = document.getElementById('addBookStatusNotRead');
const submitBookForm = document.getElementById('submitBookForm');
// Dom Connected Class Variables:
const bookItemContainer = document.getElementsByClassName('book-item-container');
const bookLink = document.getElementsByClassName('book-link');






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
  }


];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read,
  this.info = function() {
      return `${title} by ${author}, ${pages} pages, ${read}.`
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

function addBookToLibrary() {
  // 
}

console.log(theHobbit.info());