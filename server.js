const path = require('path');
const express = require('express');
const app = express();
const PORT = 5000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('content');
});

app.listen(PORT, () => {
  console.log(`Food Blog is running at http://localhost:${PORT}`);
});