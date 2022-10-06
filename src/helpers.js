function createCookie(res, sid) {
  const msInWeek = 604800000
  res.cookie("sid", sid, {
    signed: true,
    httpOnly: true,
    maxAge: msInWeek,
    sameSite: "lax",
  })
}

function sanitize(str) {
  return str.replaceAll("<", "&lt;")
}

function validation(message) {
  return message ? `<span style="color: red">${message}</span>` : ""
}

module.exports = { createCookie, sanitize }
