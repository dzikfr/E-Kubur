const mysql = require("mysql");

const dbConnection = mysql.createConnection({
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_NAME}`
});

dbConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected");
    }
});

module.exports = dbConnection;