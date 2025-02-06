const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // For demonstration purposes, we will just log the credentials
    console.log(`Username: ${username}, Password: ${password}`);
    res.send('Login successful');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
