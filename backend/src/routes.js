const express = require('express');
const { index, show, store, update, destroy } = require('./controllers/ImgController');

const routes = express();

// Routes
routes.get('/img', index);
routes.get('/img/:id', show);
routes.post('/img', store);
routes.put('/img/:id', update);
routes.delete('/img/:id', destroy);

module.exports = routes;
