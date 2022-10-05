const db = require("../database/db.js");

const shared_books = db.prepare(/*sql*/`
SELECT name, author, rating, sharing
FROM books WHERE sharing=1`)


function getSharedBooks() {
    return shared_books.all()
}

module.exports = { getSharedBooks }