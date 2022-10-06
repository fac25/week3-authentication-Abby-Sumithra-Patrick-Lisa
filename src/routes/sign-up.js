const { SignUp } = require("../templates.js")
const { createUser, getUserByEmail } = require("../model/user")
const { createSession } = require("../model/sessions")
const { createCookie } = require("../helpers")
const bcrypt = require("bcryptjs")

function get(req, res) {
  res.send(SignUp())
}

function post(req, res) {
  const { email, password } = req.body
  const existingUser = getUserByEmail(email)
  const nickname = req.body.nickname;
  const message = req.body.message;
  const errors = {};
  if (!nickname) {
    errors.nickname = "Please enter your nickname";
  }
  if (!message) {
    errors.message = "Please enter a message";
  }
  if (Object.keys(errors).length) {
    const body = home(posts, errors, req.body);
    res.status(400).send(body);



  if (existingUser) return res.redirect("/log-in")
  bcrypt.hash(password, 12).then((hashedPassword) => {
    const userId = createUser(email, hashedPassword).id
    const sid = createSession(userId)
    createCookie(res, sid)
    res.redirect(`/user-page/${userId}`)
  })
}

module.exports = { get, post }
