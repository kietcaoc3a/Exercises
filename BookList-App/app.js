// Book Class: Represents a Book
class Book {
   constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
   }
}

// UI Class: Handle UI Tasks
class UI {
   static displayBooks() {
      const books = Store.getBooks();

      books.forEach((book) => UI.addBookToList(book));
   }

   static addBookToList(book) {
      const listBook = document.querySelector("#book-list");

      let newBook = document.createElement("tr");

      newBook.innerHTML = `
         <td>${book.title}</td>
         <td>${book.author}</td>
         <td>${book.isbn}</td>
         <td><a class="btn btn-danger btn-sm delete">X</a></td>
      `

      listBook.appendChild(newBook);
   }

   static clearFiled() {
      document.querySelector("#title").value = "";
      document.querySelector("#author").value = "";
      document.querySelector("#isbn").value = "";
   }

   static removeBook(el) {
      if (el.classList.contains("delete")) {
         el.parentElement.parentElement.remove();
         Store.removeBooks(el.parentElement.previousElementSibling.textContent);
      }
   }

   static showAlert(mes, className) {
      const newDiv = document.createElement("div");
      newDiv.className = `alert alert-${className}`;
      newDiv.appendChild(document.createTextNode(mes));
      const container = document.querySelector(".container");
      const form = document.querySelector("#book-form");
      container.insertBefore(newDiv, form);
      setTimeout((e) => {
         container.removeChild(container.children[1]);
      }, 2000)
   }
}

// Store Class: Handles Storage
class Store {
   static getBooks() {
      let books;
      if (localStorage.getItem("books") === null) {
         books = [];
      }
      else {
         books = JSON.parse(localStorage.getItem("books"));
      }

      return books;
   }

   static addBooks(book) {
      const books = Store.getBooks();
      books.push(book);

      localStorage.setItem("books", JSON.stringify(books));
   }

   static removeBooks(isbn) {
      // get book objects
      const obBooks = Store.getBooks();

      // delete an object from book objects
      obBooks.forEach((book, index) => {
         if (book.isbn === isbn) {
            obBooks.splice(index, 1);
         }
      });

      // update localStorage
      localStorage.setItem("books", JSON.stringify(obBooks));
   }
}


// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// UI.displayBooks();


// Event: Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
   e.preventDefault();
   const title = document.querySelector("#title").value;
   const author = document.querySelector("#author").value;
   const isbn = document.querySelector("#isbn").value;
   if (title === "" || author === "" || isbn === "") {
      UI.showAlert("Please enter all fields!!!", "danger");
   }
   else {
      let book = new Book(title, author, isbn);

      UI.showAlert("Adding book successfully!!!", "success");
      UI.addBookToList(book);
      Store.addBooks(book);
      UI.clearFiled();
   }

});

// Event: Remove a Book
const listBook = document.querySelector("#book-list");
listBook.addEventListener("click", (e) => {
   UI.removeBook(e.target);
   UI.showAlert("Removing book successfully!!!", "success");
});
