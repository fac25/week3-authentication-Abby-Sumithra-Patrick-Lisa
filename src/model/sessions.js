const crypto = require('node:crypto')
const db = require('../database/db.js')

const insert_session = db.prepare(/*sql*/`
    INSERT INTO sessions (id, user_id, expires_at) 
    VALUES($sid, $user_id, DATE('now' + '7 days'))
`)

function createSession(user_id) {
    const sid = crypto.randomBytes(18).toString('base64')
    insert_session.run({ sid, user_id })
    return sid
}

const select_session = db.prepare(/*sql*/`
SELECT id, user_id, expires_at
FROM sessions WHERE id=$sid
`)

function getSession(sid) {
    return select_session.get({ sid })
}


const delete_session = db.prepare(/*sql*/`
    DELETE FROM sessions 
    WHERE id=$sid
`)


function removeSession(sid) {
    delete_session.run({ sid })
}

module.exports = { createSession, getSession, removeSession }