function createCookie(res, sid) {
    const msInWeek = 604800000
    res.cookie("sid", sid, {
        signed: true,
        httpOnly: true,
        maxAge: msInWeek,
        sameSite: "lax"
    })
}

module.exports = { createCookie }