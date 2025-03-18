const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello, Saya Allyssa");
});

app.get('/form', (req, res) => {
    res.send(`
        <form method="post" action="/form">
            Nama: <input type="text" name="name"><br>
            Email: <input type="text" name="email"><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

app.post('/form', (req, res) => {
    const { name, email } = req.body;
    res.send(`Terima kasih, ${name}. Email Anda: ${email} telah disimpan.`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
