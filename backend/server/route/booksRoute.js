const express = require("express");
const router = express.Router();
const booksService = require("../service/booksService");

router.get("/books", async (req, res) => {
  const books = await booksService.getBooks();
  res.json(books);
});

router.get("/book/:id", async (req, res) => {
  const book = await booksService.getBook(req.params.id);
  res.json(book);
});

router.delete("/book/:id", async (req, res) => {
  const livros = await booksService.deleteBook(req.params.id);

  res.json(livros);
});

router.post("/book", async (req, res) => {
  const book = req.body;
  const newBook = await booksService.saveBook(book);

  res.json(newBook);
});

module.exports = router;
