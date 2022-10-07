function createCookie(res, sid) {
  const msInWeek = 7 * 24 * 60 * 60 * 1000
  res.cookie("sid", sid, {
    signed: true,
    httpOnly: true,
    maxAge: msInWeek,
    sameSite: "lax",
  })
}

module.exports = { createCookie }
