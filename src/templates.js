const { deleteBooks } = require("./model/books.js");


function Layout({ title, content }) {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>${title}</title>
          <link rel="stylesheet" href="../public/style.css">
        </head>
        <body>
            <main>
              ${content}
            </main>
          </div>
        </body>
      </html>
    `;
}

function Table({ caption, data, res }) {
  const [, name, author, rating] = Object.keys(data[0]);
  return /*html*/ `
  <div>
  <table>
  <thead>
  <tr>
    <td>${name}</td>
    <td>${author}</td>
    <td>${rating}</td>
  </tr>
  </thead>
  <tbody>
  ${data.map(Row).join("")}
  </tbody>

  </table>
  </div>
  `;
}

function Row({id, name, author, rating}) {
  return /*html*/ `
    <tr>
        <td>${name}</td>
        <td>${author}</td>
        <td>${rating}</td>
        <td><form method='POST' action='/delete-book/${id}'><button>deleteBooks</button></form></td>
    </tr>
  `;
}

function getUserPage({session, books}) {
  let content = /*html*/ `
  ${displayLogout(session)}
<br/>
  <form method="POST" > 
  <label for="book">Book name</label>
  <input id="book" name="book" required>
  <label for="author">Author</label>
  <input id="author" name="author" required>
  <label for="rating">Rating</label>
  <input id="rating" type="range" name="rating" min="0" max="5" required>
  <label for="sharing">Recommend to others</label>
  <input id="sharing" type="checkbox" name="sharing">
  <button >Submit</button>
  </form>
  `
  if (books.length) {
 content += Table({caption:"User books", data:books})
  }
  return content
}


function displayLogout(session) {
  return `${session ?
    `<form method="POST" action="/log-out"><button>Log out</button></form>` :
    `<a href="/sign-up">Sign up</a> or <a href="/log-in">Log In</a>`}`
}



function Home({ session, sharedBooks }) {
  const content = /*html*/` 
    <div>
      <h1>Store and share your favorite books</h1>
      <nav>
        
      </nav>
    </div>
    <div>
      ${displayLogout(session)}
      <ul>
        ${bookList(sharedBooks)}
      </ul>
    </div>`

  return Layout({ title: 'WEBSITE NAME', content })
}

function bookList(arr) {
  return arr.map(book => `
  <li>
    <p>${book.name}</p>
    <p>${book.author}</p>
    <p>${book.rating}</p> 
  </li>`
  ).join("")
}


function SignUp() {
  const content = `
  <div>
    <h1>Sign Up</h1>
    <form method="POST" action='/sign-up'>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button>Sign up</button>
    </form>
  </div>`
  return Layout({ title: 'Sign Up', content })
}

function Login() {
  const content = /*html*/ `
    <div>
      <h1>Login to your account</h1>
      <form method="POST" action='log-in'>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button>Log in</button>
      </form>
    </div>
  `;
  return Layout({ title: 'Log In', content })
}

module.exports = { Layout, Home, SignUp, Login, getUserPage }
