const mysql = require('mysql');
const dbConfig = require('../db_config.js');
class DatabaseUtility{
    constructor(){
        this.connection = mysql.createConnection(
            dbConfig
        );
        this.connection.connect();
    }

    static prepare(columns = '*', table = 'users', mId = 1){
        var sql = 'SELECT ?? FROM ?? WHERE ?? = ?';
        var inserts = [columns, table, 'id', mId];
        sql = mysql.format(sql, inserts);
        return sql;
    }

    query(query_str){
        var self = this;
        return new Promise(function(resolve, reject) {
            self.connection.query(query_str, function (err, rows) {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
    
    dbInsert(tableName, insertObj, cb = null){
        this.connection.query('INSERT INTO ?? SET ?', [ tableName, insertObj ], function (error, results) {
            if (error) throw error;
            cb && cb(results.insertId);
        });
    }

    dbClose(){
        this.connection && this.connection.end();
    }
}

module.exports = DatabaseUtility;