
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

function Table({ caption, data }) {
  const keys = Object.keys(data[0]);
  return /*html*/ `
  <div>
  <table>
  <thead>
  <tr>
  ${keys.map((key) => `<th>${key}</th>`).join("")}
  </tr>
  </thead>
  <tbody>
  ${data.map(Row).join("")}
  </tbody>

  </table>
  </div>
  `;
}

function Row(entry) {
  return /*html*/ `
    <tr>
      ${Object.values(entry)
        .map((val) => `<td>${val}</td>`)
        .join("")}
    </tr>
  `;
}


function getUserPage(books) {
  let content = /*html*/ `
  <form method="POST"> 
  <label for="book">Book name</label>
  <input id="book" name="book" required>
  <label for="author">Author</label>
  <input id="author" name="author" required>
  <label for="rating">Rating</label>
  <input id="rating" type="range" name="rating" required>
  <button>Submit</button>
  </form>
  `
  if (books.length) {
 content += Table({caption:"User books", data:books})
  }
  return content
}

module.exports = { Layout, getUserPage }