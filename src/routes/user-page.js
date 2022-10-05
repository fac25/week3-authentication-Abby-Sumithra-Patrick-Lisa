const { listBooks } = require("../model/books.js")

function get(req, res) {
    const user_id = Number(req.params.user_id);
    const books = listBooks(user_id);
    console.log(books);
    const content = /*html*/ `
    <form method="POST"> 
    <label for="book">Book name</label>
    <input id="book" name="book" required>
    <label for="author">Author</label>
    <input id="author" name="author" required>
    <label for="rating">Rating</label>
    <input id="rating" type="range" name="rating" required>
    <button>Submit</button>
    </form>
    <ul> 

    </ul>
    `
    res.send(content);
}

module.exports = { get };