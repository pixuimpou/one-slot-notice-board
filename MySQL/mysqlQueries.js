const config = require("./mysqlConfig");

module.exports = {

    getPost: (callback) => {
        const con = config.connection();
        con.connect(err => {
            if (err) throw err;
            console.log("Connected!");
            con.query("SELECT title, content FROM post;",
            (error, result) => {
                if (error) throw error
                callback(result);
            })
        })
    },

    overridePost: (title, content, callback) => {
        const sqlDelete = "DELETE FROM post;"
        const sqlInsert = `INSERT INTO post VALUES(null, ${JSON.stringify(content)}, ${JSON.stringify(title)});`
        const con = config.connection();
        con.connect(err => {
            if (err) throw err;
            console.log("Connected!");
            con.query(sqlDelete, (error) => {
                if (error) throw error;
                con.query(sqlInsert, (insertError, result) => {
                    if (insertError) throw insertError;
                    callback(result.affectedRows);
                });
            });
        });
        
        
    }
}