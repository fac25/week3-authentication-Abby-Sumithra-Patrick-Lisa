const db = require('../database/db.js');

const insert_user = db.prepare(/*sql*/
    `INSERT INTO users (email, hash) 
 VALUES ($email, $hash) 
 RETURNING id`);

function createUser(email, hash) {
    return insert_user.get({ email, hash })
}

// const select_user = db.prepare(/*sql*/
//     `SELECT id, email, hash, create_at
// FROM users WHERE email= $email`
// )

// function getUserByEmail(email) {
//     return select_user.get({ email })
// }

module.exports = { createUser }