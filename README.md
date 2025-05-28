# Express Server

This project demonstrates how to set up and use a basic Express server in Node.js.

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/AnUj7i/express-server.git
   ```
2. Navigate to the project directory:
   ```sh
   cd express-server
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the server:
   ```sh
   node index.js
   ```
   Or, if you use nodemon for auto-reloading:
   ```sh
   npx nodemon index.js
   ```
2. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Example Express Server (`index.js`)
```js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Customization
- Edit `index.js` to add more routes or middleware as needed.
- Change the `PORT` variable to run the server on a different port.

## Resources
- [Express Documentation](https://expressjs.com/)

---
Feel free to modify this project to suit your needs!
