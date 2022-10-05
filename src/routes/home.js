const { Home } = require("../templates.js");
const { getSharedBooks } = require('../model/books')

function get(req, res) {
  const mockSession = undefined
  const sharedBooks = getSharedBooks()
  res.send(Home({mockSession, sharedBooks }));
}


module.exports = { get };
