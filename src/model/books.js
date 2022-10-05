const db = require("../database/db.js");

const list_books = db.prepare(/*sql*/ `
SELECT name, author, rating, sharing FROM books WHERE user_id = ?
`)

function listBooks(user_id) {
    return list_books.all(user_id);
}


module.exports = { listBooks };