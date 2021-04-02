const mysql = require('mysql');

module.exports = {
    connection: () => {
        config = {
            host: "localhost",
            database: "one_slot_notice_board",
            user: "root",
            password: "root"
        }
            return mysql.createConnection(config);
    }
}

