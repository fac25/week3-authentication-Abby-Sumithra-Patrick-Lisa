const { listBooks, addBooks } = require("../model/books.js");
const { getUserPage } = require("../templates.js");
const { getSession } = require("../model/session.js");

function get(req, res) {
    const sid = req.signedCookies.sid;
    const session = getSession(sid);
    let user_id;
    if(session){
        // get the user id from the session
        user_id = session.user_id
    }
    else{
        user_id = Number(req.params.user_id);
    }
    const books = listBooks(user_id);
    const body = getUserPage({session, books});
    res.send(body);
}

function post(req, res) {
const user_id = 1;
    let { book, author, rating, sharing } = req.body;
    console.log(sharing);
    sharing = (sharing === "on") ? 1 : 0;
     console.log(book, author, rating, sharing);
    addBooks(book, author, rating, sharing, user_id)
    res.redirect(`/user-page/${user_id}`);
}

module.exports = { get, post };