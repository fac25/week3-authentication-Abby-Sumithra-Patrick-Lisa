const { Layout } = require("../templates.js");

function get(req, res) {
    const title = "Store and share your favorite books";
    const content = /*html*/ `
    <div>
      <h1>${title}</h1>
      <form method="POST" action="/log-out"><button">Log out</button>
      <nav><a href="/sign-up">Sign up</a> or <a href="/log-in">log in</a></nav>
    </div>
    <div>
    <!-- Recommended Books -->
    
    </div>
  `;
  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };
