const { SignUp } = require("../templates.js");
const { createUser, getUserByEmail } = require("../model/user")
const bcrypt = require('bcryptjs')

function get(req, res) {
  res.send(SignUp());
}

function post(req, res) {
  const { email, password } = req.body;

  bcrypt.hash(password, 12).then(hashedPassword => {
    const userId = createUser(email, hashedPassword).id
    res.redirect(`/user-page/${userId}`)
  })
}

module.exports = { get, post };