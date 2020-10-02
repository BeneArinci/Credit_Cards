const express = require('express');
const app = express();
const cors = require('cors')
const cards = require('./cardsAPI')
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: 'http://localhost:3000',
}

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/cardslist', cors(corsOptions), (req, res) => {
  res.send(cards);
});