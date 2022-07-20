const mysql = require('mysql');

// buat konfigurasi koneksi
const pool = mysql.createPool({
    connectionLimit: 15, //important
    host: 'remotemysql.com',
    user: 'sOrtNg22tx',
    password: '6I786U8AJ3',
    database: 'sOrtNg22tx',
    debug: false
});

module.exports = pool;
