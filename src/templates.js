
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


function Home({ title, session, sharedBooks }) {
  const content = /*html*/` 
  <div>
    <h1>${title}</h1>
    <nav>
      ${session ? `<form method="POST" action="/log-out"><button>Log out</button>` : `<a href="/sign-up">Sign up</a> or <a href="/log-in">Log In</a>`}
    </nav>
  </div>
  <div>


  </div>`

  return Layout({ title, content })
}

module.exports = { Layout, Home }