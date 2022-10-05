const { Home } = require("../templates.js");
const { getSharedBooks } = require('../model/books')
const { getSession } = require('../model/sessions')

function get(req, res) {
  const sid = req.signedCookies?.sid
  const session = getSession(sid)
  console.log(session)

  const sharedBooks = getSharedBooks()
  res.send(Home({ session, sharedBooks }));
}


module.exports = { get };
