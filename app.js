const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response) => {});

app.get('/works', (request, response) => {});

app.get('/photos', (request, response) => {});

app.listen(3000, () => console.log('Listening on port: 3000'));
