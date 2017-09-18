// app.js
const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'timekeeper'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM task', (err, rows) => {
  if (err) throw err;

  console.log('Data received from DB:\n');
  console.log(rows);
})

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});