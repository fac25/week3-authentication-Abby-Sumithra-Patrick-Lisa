const { listBooks } = require("../model/books.js");
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
    const body = getUserPage(books);
    res.send(body);
}

module.exports = { get };