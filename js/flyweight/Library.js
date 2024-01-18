import Book from "./Book.js";

function Library() {
  this.booksList = new Set();
  this.copiesList = [];
}
Library.prototype.createBook = function ({ title, author, isbn }) {
  if (this.booksList.has(isbn)) return;

  this.booksList.add(isbn);
  return new Book({ title, author, isbn });
};
Library.prototype.addBook = function ({ title, author, isbn, year }) {
  const book = {
    ...this.createBook({ title, author, isbn }),
    year,
  };
  this.copiesList.push(book);
};
Library.prototype.report = function () {
  console.log(`Number of books : ${this.booksList.size}`);
  console.log(`Number of copies : ${this.copiesList?.length}`);
};

const library = new Library();

library.addBook({ title: "", author: "", isbn: "111", year: "" });
library.addBook({ title: "", author: "", isbn: "111", year: "" });
library.addBook({ title: "", author: "", isbn: "333", year: "" });
library.addBook({ title: "", author: "", isbn: "222", year: "" });
library.addBook({ title: "", author: "", isbn: "111", year: "" });

library.report();

export default {};
