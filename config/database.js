const mysql = require('mysql');
// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    host: 'remotemysql.com',
    user: 'sOrtNg22tx',
    password: '6I786U8AJ3',
    database: 'sOrtNg22tx',
    multipleStatements: true
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
koneksi.on('error', function(err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        const koneksi = mysql.createConnection({
            host: 'remotemysql.com',
            user: 'sOrtNg22tx',
            password: '6I786U8AJ3',
            database: 'sOrtNg22tx',
            multipleStatements: true
        });
        // koneksi database
        koneksi.connect((err) => {
            if (err) throw err;
            console.log('MySQL Connected...');
        });
    } else {
        throw err;
    }
})
module.exports = koneksi;