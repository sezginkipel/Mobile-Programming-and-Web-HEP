const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.json({
        users: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
        ],
    });
});



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
