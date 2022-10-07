const server = require("./server.js");
require('dotenv').config()

const PORT = process.env.PORT || 3333;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
