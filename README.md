# Project: Library

Project/Challenge by [The Odin Project](https://theodinproject.com)
- [Link to Project/Challenge](https://www.theodinproject.com/lessons/node-path-javascript-library)

Coded By [Daniel Godin](https://danielgodin.org)
- [GitHub Link](https://github.com/daniel-godin/top-project-library)
- [Live Page Link](https://daniel-godin.github.io/top-project-library/)

## Finished Project Thoughts:
- This was a great little project to learn how to use JavaScript arrays and Objects in arrays, along with DOM manipulation.  Seems like it's just a half-step away from storing these Objects in a database array, which is what I've wanted to learn for a long time.

- The biggest hurdle for me in this project was connecting a delete button with a specific Object in the array.  I eventually figured it out by labeling the HTML elements with an ID that matched the array's [n].  This is all done during the DOM library creation function.

- Practicing creating HTML elements on load or event was great.  Plan to use this a lot in the future, as long as it's secure.

- I didn't style the project too heavily for now.  It functions good enough for now, but if this was a public facing application, I would do some extensive styling and changing of the layout.  Including a "mobile first" approach, as opposed to my desktop first right now.

- I tried to use git commit's atomically.  I think I mostly succeeded in that endeavour, but will try and do better next time.

## Assignment:
1. If you haven’t already, set up your project with skeleton HTML/CSS and JS files.

2. All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
```js
let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}
```

3. Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

4. Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. You will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!

5. Add a button on each book’s display to remove the book from the library. 
-  You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

6. Add a button on each book’s display to change its read status. 
- To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

**NOTE:  You’re not required to add any type of storage right now. You will have the option to come back to this project later on in the course.**
