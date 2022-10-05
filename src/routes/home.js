const { Home } = require("../templates.js");
const { getSharedBooks } = require('../model/books')

function get(req, res) {
  const title = "Store and share your favorite books";
  const mockSession = undefined
  const SharedBooks = getSharedBooks()
  res.send(Home({ title, mockSession, SharedBooks }));
}


module.exports = { get };
