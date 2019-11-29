const mysql = require('mysql');
const dbConfig = require('../db_config.js');
class DatabaseUtility{
    constructor(){
        this.connection = mysql.createConnection(
            dbConfig
        );
        this.connection.connect();
        this.admissionLevelMap = {};
        this.provincesMap = {};
    }

    static prepare(columns = '*', table = 'users', mId){
        var sql = 'SELECT ?? FROM ??';
        var inserts = [columns, table];
        if(mId){
            sql += ' WHERE ?? = ?';
            inserts.push(...['id', mId]);
        }
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

    asyncQuery(query_str){
        var self = this;
        return new Promise(function(resolve, reject) {
            self.connection.query(query_str, function (err, rows) {
                if (err) {
                    return reject(err);
                }
                return resolve(rows);
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

    
    //extract admission_level into an object    
    getPromiseOfAdmissionLevel()  {
        var strQueryAdmissionLevelSql = DatabaseUtility.prepare(['name', 'id'],'admission_level');
        var findData = this.query(strQueryAdmissionLevelSql);
        return findData;
    }

    async handleGetPromiseOfAdmissionLevel(promise){
        var self = this;
        return await promise.then(function(data){
            for(var i = 0; i < data.length; i++){
                if(data[i]){
                    var name = data[i]['name'];
                    var id = data[i]['id'];
                    self.admissionLevelMap[name] = id;
                }
            }
            return self.admissionLevelMap;
        });
    }
    
    //extract provinces into an object
    getPromiseOfProvinces()  {
        var strQueryProvincesSql = DatabaseUtility.prepare(['chinese_name', 'id'], 'provinces');
        var findData = this.query(strQueryProvincesSql);
        return findData;
    }

    async handleGetPromiseOfProvinces(promise){
        var self = this;
        return await promise.then(function(data){
            for(var i = 0; i < data.length; i++){
                if(data[i]){
                    var name = data[i]['chinese_name'];
                    var id = data[i]['id'];
                    self.provincesMap[name] = id;
                }
            }
            return self.provincesMap;
        });
    }
    
}

module.exports = DatabaseUtility;