const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/intro', (req, res) => {
  res.send('Hello I am anuj!');
});

app.get('/section', (req, res) => {
  res.send('sexction');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
