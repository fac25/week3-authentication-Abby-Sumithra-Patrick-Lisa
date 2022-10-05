const { Layout } = require("../templates.js");


function get(req, res) {
    const title = "Login to your account";
    const content = /*html*/ `
      <div>
      <h1>${title}</h1>
      <form method="POST">
        <div>
          <label for="email">email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div>
          <label for="password">password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button>Log in</button>
      </form>
    </div>
  `;
  const body = Layout({ title, content });
  res.send(body);
}

module.exports = { get };