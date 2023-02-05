const mysql = require('mysql');

// buat konfigurasi koneksi
const pool = mysql.createPool({
    connectionLimit: 15, //important
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12595982',
    password: 'seECasVcmn',
    database: 'sql12595982',
    debug: false
});

module.exports = pool;
