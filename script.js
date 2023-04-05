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