const express = require('express');
const path = require('path');

const app = express();
// const srcFolder = path.resolve(__dirname, '/src');

app.use(express.static(__dirname + '/src'));

const port = 3033;

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/src/html/index.html');
});

app.listen(port, () => {
    console.log(`Server listening port ${port}`);
});
