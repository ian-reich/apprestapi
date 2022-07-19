var mysql = require('mysql');

// koneksi database 
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'dbadmin',
    database:'ci4'
});

conn.connect((err)=>{
    if (err) throw err;
    console.log('Koneksi Berhasil');
});
module.exports = conn;