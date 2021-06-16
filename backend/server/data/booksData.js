const database = require("../database/database");

exports.getBooks = () => {
  return database.query("select * from livro order by codigo desc LIMIT 50");
};

exports.getBook = (id) => {
  return database.query("select * from livro where codigo = $1", [id]);
};

exports.deleteBook = (id) => {
  database.query("delete from livro where codigo = $1", [id]);

  return this.getBooks()
};

exports.saveBook = (book) => {
  console.log(book.titulo, book.isbn, book.quantidade)
  return database.one(
    "insert into livro (titulo, isbn, quantidade, codigoassunto) values ($1, $2, $3, 1) returning *",
    [
      book.titulo,
      book.isbn,
      book.quantidade,
    ]
  );
};
