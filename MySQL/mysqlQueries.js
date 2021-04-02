const config = require("./mysqlConfig");

module.exports = {

    getPost:  () => {
        return new Promise((resolve, reject)=>{
            const con = config.connection();
            con.connect(err => {
                if (err) throw err;
                console.log("Connected!");
            });
            con.query("SELECT content FROM post;",
            (err, rows) => {
                if (rows === undefined){
                    reject(new Error("Error rows is undefined"));
                } else {
                    resolve(rows);
                }
            })
        })
    },

    overridePost: (content) => {
        const sqlDelete = "DELETE FROM post;"
        const sqlInsert = `INSERT INTO post VALUES(null, ${JSON.stringify(content)});`
        const con = config.connection();
        con.connect(err => {
            if (err) throw err;
            console.log("Connected!");
        });
        con.query(sqlDelete, (error) => {
            if (error) throw error;
        });
        con.query(sqlInsert, (error, result) => {
            if (error) throw error;
            return result.affectedRows;
        })
    }
}