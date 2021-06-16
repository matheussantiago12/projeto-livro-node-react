const booksData = require("../data/booksData");

exports.getBooks = () => {
  return booksData.getBooks();
};

exports.getBook = (id) => {
  return booksData.getBook(id);
};

exports.deleteBook = (id) => {
  return booksData.deleteBook(id);
};

exports.saveBook = (book) => {
  return booksData.saveBook(book);
};
