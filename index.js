const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var corsOptions = {
    origin: "http://localhost:8080"
};

// buat server nya

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


app.get('/', (req, res) => {
    res.send('Tambahkan dibelakang URL dengan parameter: /api/:nama_tabel');
})

//get data Adat
app.get('/api/adat', (req, res) => {

    const querySql = 'SELECT * FROM budaya  WHERE jenis = 1';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });

});
//get data kesenian
app.get('/api/kesenian', (req, res) => {

    const querySql = 'SELECT * FROM budaya WHERE jenis = 2';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });

});
//get data kuliner
app.get('/api/kuliner', (req, res) => {

    const querySql = 'SELECT * FROM budaya WHERE jenis = 3';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });

});
//get data etc budaya
app.get('/api/etcb', (req, res) => {

    const querySql = 'SELECT * FROM budaya WHERE jenis = 4';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });

});

//get data air terjun
app.get('/api/airterjun', (req, res) => {


    const querySql = 'SELECT * FROM wisata WHERE jenis = 5';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });

});
//get data pantai
app.get('/api/pantai', (req, res) => {


    const querySql = 'SELECT * FROM wisata WHERE jenis = 6';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });

});

//get data gunbuk
app.get('/api/gunbuk', (req, res) => {


    const querySql = 'SELECT * FROM wisata WHERE jenis = 7';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });

});
//get data etcw
app.get('/api/etcw', (req, res) => {

    const querySql = 'SELECT * FROM wisata WHERE jenis = 8';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    });

});
// //get data budaya
// app.get('/api/budaya', (req, res) => {

//     const querySql = 'SELECT * FROM budaya';

//     koneksi.query(querySql, (err, rows, field) => {
//         if (err) {
//             return res.status(500).json({ message: 'Ada kesalahan', error: err });
//         }
//         res.status(200).json({ success: true, data: rows });
//     });
// });



//get data komentar
app.get('/api/komentar', (req, res) => {


    const querySql = 'SELECT * FROM komentar';

    koneksi.query(querySql, (err, rows, fields) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }
        res.status(200).json({ success: true, data: rows });
    })
});

// // insert data komentar
app.post('/api/komentar', (req, res) => {
    const { nama, email, komentar } = req.body;

    // buat variabel penampung data dan query sql
    const data = {...req.body };
    const querySql = 'INSERT INTO komentar SET ?';

    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});