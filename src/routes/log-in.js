const { Login } = require("../templates.js");
const { getUserByEmail } = require("../model/user")
const { createSession } = require("../model/sessions")
const { createCookie } = require("../model/helpers")
const bcrypt = require('bcryptjs')

function get(req, res) {
  res.send(Login({}));
}

function post(req, res) {
  const { email, password } = req.body
  const user = getUserByEmail(email)
  // const error3 = () => res.status(401).send('<h1>Wrong info</h1>')
  let inputError = false
  let emailError = false
  let pwError = false
  if (!email) {
    inputError = true
    res.send(Login({ inputError }))
  } else if (!password) {
    inputError = true
    res.send(Login({ inputError }))
  } else {
    //check if email does not exist, if not redirect to error
    if (!user) {
      emailError = true
      res.send(Login({ emailError }))
    } else {
      bcrypt.compare(password, user.hash).then(match => {
        if (!match) {
          pwError = true
          res.send(Login({ pwError }))
        } else {
          const sid = createSession(user.id)
          createCookie(res, sid)
          res.redirect(`/user-page/${user.id}`)
        }
      })
    }
  }
}


// compare password in form to hash in db

// if match createSession
// display error

module.exports = { get, post };