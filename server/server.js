const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello from server');
});

app.post('/enroll', function(req, res) {
    console.log(req.body);
    res.status(401).send({"message": "Express server has received your form. We will be in touch with you soon"});
});

app.listen(PORT, function() {
    console.log('Server running on localhost', PORT);
});