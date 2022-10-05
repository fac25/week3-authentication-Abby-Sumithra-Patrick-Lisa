const { Login } = require("../templates.js");


function get(req, res) {
  res.send(Login());
}

module.exports = { get };