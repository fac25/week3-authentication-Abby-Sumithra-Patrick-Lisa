const { SignUp } = require("../templates.js");


function get(req, res) {
  res.send(SignUp());
}

module.exports = { get };