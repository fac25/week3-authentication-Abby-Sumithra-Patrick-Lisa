const { SignUp } = require("../templates.js");
const { createUser, getUserByEmail } = require("../model/user")
const { createSession } = require("../model/sessions")
const { createCookie } = require("../model/helpers")
const bcrypt = require('bcryptjs')

function get(req, res) {
  res.send(SignUp());
}

function post(req, res) {
  const { email, password } = req.body;
  const existingUser = getUserByEmail(email)
  let errors = false
  if (!email) {
    errors = true
    res.send(SignUp(errors))
  } else if (!password) {
    errors = true
    res.send(SignUp(errors))
  }

  if (existingUser) return res.redirect('/log-in')

  bcrypt.hash(password, 12).then(hashedPassword => {
    const userId = createUser(email, hashedPassword).id
    const sid = createSession(userId)
    createCookie(res, sid)
    res.redirect(`/user-page/${userId}`)
  })
}


module.exports = { get, post };