const { Login } = require("../templates.js");
const { getUserByEmail } = require("../model/user")
const { createSession } = require("../model/sessions")
const { createCookie } = require("../model/helpers")
const bcrypt = require('bcryptjs')

function get(req, res) {
  res.send(Login());
}

function post(req, res) {
  const { email, password } = req.body
  const user = getUserByEmail(email)
  const error = () => res.status(401).send('<h1>Wrong info</h1>')

  //check if email does not exist, if not redirect to error
  if (!user) return error()
  bcrypt.compare(password, user.hash).then(match => {
    if (!match) return error()
    const sid = createSession(user.id)
    createCookie(res, sid)
    res.redirect(`/user-page/${user.id}`)
  })

  // compare password in form to hash in db

  // if match createSession
  // display error
}

module.exports = { get, post };