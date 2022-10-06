const { listBooks, addBooks, deleteBook } = require("../model/books.js");
const { getUserPage } = require("../templates.js");
const { getSession } = require("../model/sessions.js");

function get(req, res) {
    const sid = req.signedCookies.sid;
    const session = getSession(sid);
    const user_id = session && session.user_id;
    
    const page_owner = Number(req.params.user_id);
    if (user_id !== page_owner) {
        return res.status(401).send("<h1>You are not logged in</h1>");
    }

    const books = listBooks(user_id);
    const body = getUserPage({session, books});
    res.send(body);
}

function post(req, res) {
    const sid = req.signedCookies.sid;
    const session = getSession(sid);
    const user_id = session && session.user_id;
    
    let { book, author, rating, sharing } = req.body;
  
    sharing = (sharing === "on") ? 1 : 0;
  
    addBooks(book, author, rating, sharing, user_id)
    res.redirect(`/user-page/${user_id}`);
}

function deletePost(req, res) {
    const sid = req.signedCookies.sid;
    const session = getSession(sid);
    const user_id = session && session.user_id;

    const bookId = req.params.id
    deleteBook(bookId)
    res.redirect(`/user-page/${user_id}`)
}

module.exports = { get, post, deletePost };