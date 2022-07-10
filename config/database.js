const mysql = require('mysql');
// buat konfigurasi koneksi

const pool = mysql.createPool({
    connectionLimit: 15, //important
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6505250',
    password: 'yygxH8N6RK',
    database: 'sql6505250',
    debug: false
});

module.exports = pool;