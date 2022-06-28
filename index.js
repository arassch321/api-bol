const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

//get data Adat
app.get('/api/adat', (req, res) => {

    const querySql = 'SELECT * FROM adat';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

//get data Adat
app.get('/api/airterjun', (req, res) => {

    const querySql = 'SELECT * FROM airterjun';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

app.get('/api/budaya', (req, res) => {

    const querySql = 'SELECT * FROM budaya';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

app.get('/api/etcb', (req, res) => {

    const querySql = 'SELECT * FROM etcb';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

app.get('/api/etcw', (req, res) => {

    const querySql = 'SELECT * FROM etcw';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

app.get('/api/gunbuk', (req, res) => {

    const querySql = 'SELECT * FROM gunbuk';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

app.get('/api/kesenian', (req, res) => {

    const querySql = 'SELECT * FROM kesenian';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

app.get('/api/komentar', (req, res) => {

    const querySql = 'SELECT * FROM komentar';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

app.get('/api/kuliner', (req, res) => {

    const querySql = 'SELECT * FROM kuliner';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

app.get('/api/pantai', (req, res) => {

    const querySql = 'SELECT * FROM pantai';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });
});

// // insert data komentar
// app.post('/api/komentar', (req, res) => {
//     // buat variabel penampung data dan query sql
//     const data = {...req.body };
//     const querySql = 'INSERT INTO komentar SET ?';

//     // jalankan query
//     koneksi.query(querySql, data, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return res.status(500).json({ message: 'Gagal insert data!', error: err });
//         }

//         // jika request berhasil
//         res.status(201).json({ success: true, message: 'Berhasil insert data!' });
//     });
// });
