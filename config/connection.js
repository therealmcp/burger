var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    // development: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "KraMerica123",
        database: "burgers_db",
        // dialect: "mysql"
    // },
    // production: {
    //     use_env_variable: "JAWSDB_URL",
    //     dialect: "mysql"
    // }
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;