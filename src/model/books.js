const db = require("../database/db.js");

const list_books = db.prepare(/*sql*/ `
SELECT id, name, author, rating, sharing FROM books WHERE user_id = ?
`)

function listBooks(user_id) {
    return list_books.all(user_id);
}

const shared_books = db.prepare(/*sql*/`
SELECT name, author, rating, sharing
FROM books WHERE sharing=1`)


function getSharedBooks() {
    return shared_books.all()
}

const add_books = db.prepare(
    /* sql */ `INSERT INTO books (name, author, rating, sharing, user_id) 
    VALUES ($book, $author, $rating, $sharing, $user_id )`
);

function addBooks(book, author, rating, sharing, user_id){
    return add_books.run({book, author, rating, sharing, user_id});
}

const delete_book = db.prepare(
    /*sql*/ `
    DELETE FROM books WHERE id = ?
    `
);

function deleteBook(book_id) {
    delete_book.run(book_id)
}

module.exports = { getSharedBooks, listBooks, addBooks, deleteBook }

