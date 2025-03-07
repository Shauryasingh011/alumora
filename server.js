const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/login', auth.login);
app.post('/signup', auth.signup);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});     
