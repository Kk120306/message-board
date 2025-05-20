const express = require('express');
const path = require('path');
const indexRouter = require('./index');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})