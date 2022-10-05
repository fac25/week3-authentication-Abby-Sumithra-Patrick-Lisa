const { Home } = require("../templates.js");
const { getSharedBooks } = require('../model/books')

function get(req, res) {
  const title = "Store and share your favorite books";
  const mockSession = undefined
  const sharedBooks = getSharedBooks()
  res.send(Home({ title, mockSession, sharedBooks }));
}


module.exports = { get };
