const express = require("express");
const cookieParser = require("cookie-parser");
const home = require("./routes/home.js");
const signup = require("./routes/sign-up.js");
const login = require("./routes/log-in.js");
const logout = require("./routes/log-out.js");
const userpage = require("./routes/user-page.js");

const bodyParser = express.urlencoded({ extended: false });
const server = express();

const cookies = cookieParser(process.env.COOKIE_SECRET);

server.use(cookies);
server.get("/", home.get);
server.get("/sign-up", signup.get);
server.post("/sign-up", bodyParser, signup.post);
server.get("/log-in", login.get);
// server.post("/log-in", body, login.post);
// server.post("/log-out", logout.post);
// server.get("/user-page/:user_id", userpage.get);
// server.post("/user-page/:user_id", body, userpage.post);

function sanitize(str) {
    return str.replaceAll('<', '&lt;')
}

module.exports = server;