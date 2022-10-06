const express = require("express")
const cookieParser = require("cookie-parser")
const home = require("./routes/home.js")
const signup = require("./routes/sign-up.js")
const login = require("./routes/log-in.js")
const logout = require("./routes/log-out.js")
const userpage = require("./routes/user-page.js")

// Handle hidden variables
const dotenv = require("dotenv")
dotenv.config()

const bodyParser = express.urlencoded({ extended: false })
const server = express()

//fix before deployment
const cookies = cookieParser(process.env.COOKIE_SECRET || "secret")
server.use(cookies)

const staticHandler = express.static("public");
server.use(staticHandler);

server.get("/", home.get)

server.get("/sign-up", signup.get)
server.post("/sign-up", bodyParser, signup.post)
server.get("/log-in", login.get)
server.post("/log-in", bodyParser, login.post)
server.post("/log-out", logout.post)
server.get("/user-page/:user_id", userpage.get)
server.post("/user-page/:user_id", bodyParser, userpage.post)
server.post('/delete-book/:id', bodyParser, userpage.deletePost)


function sanitize(str) {
  return str.replaceAll("<", "&lt;")
}



module.exports = server
