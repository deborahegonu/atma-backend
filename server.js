// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Your JSON database
const middlewares = jsonServer.defaults();

// No static files are served
server.use(middlewares);

// Add a route for the JSON database
server.use(router);

// Start the server on port 4000
server.listen(4000, () => {
  console.log('JSON Server is running on http://localhost:4000');
});
