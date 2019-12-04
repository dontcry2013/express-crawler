const mysql = require('mysql');
const myPath = require('path').resolve(__dirname, '..', 'db_config.js');

const dbConfig = require(myPath);

class DatabaseUtility {
  constructor() {
    this.connection = mysql.createConnection(
      dbConfig,
    );
    this.connection.connect();
    this.admissionLevelMap = {};
    this.provincesMap = {};
  }

  static prepare(columns = '*', table = 'users', mId) {
    let sql = 'SELECT ?? FROM ??';
    const inserts = [columns, table];
    if (mId) {
      sql += ' WHERE ?? = ?';
      inserts.push(...['id', mId]);
    }
    sql = mysql.format(sql, inserts);
    return sql;
  }

  query1(queryStr) {
    const self = this;
    return new Promise(((resolve, reject) => {
      // eslint-disable-next-line consistent-return
      self.connection.query(queryStr, (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      });
    }));
  }

  asyncQuery(queryStr) {
    const self = this;
    return new Promise(((resolve, reject) => {
      self.connection.query(queryStr, (err, rows) => {
        if (err) {
          return reject(err);
        }
        return resolve(rows);
      });
    }));
  }


  dbInsert(data, err) {
    const self = this;
    if (err) throw err;
    console.log('Connected!');
    const values = data;
    const sql = 'INSERT INTO ncee_fraction_lines(province_id,year,score,art_science_division,level) VALUES ?';
    // eslint-disable-next-line no-shadow
    self.connection.query(sql, [values], (err) => {
      if (err) {
        console.log('INSERT ERROR - ', err.message);
        return;
      }
      console.log('INSERT SUCCESS');
    });
  }

  dbClose() {
    this.connection.end();
  }


  // extract admission_level into an object
  getPromiseOfAdmissionLevel() {
    const strQueryAdmissionLevelSql = DatabaseUtility.prepare(['name', 'id'], 'admission_level');
    const findData = this.query1(strQueryAdmissionLevelSql);
    return findData;
  }

  async handleGetPromiseOfAdmissionLevel(promise) {
    const self = this;
    // eslint-disable-next-line no-return-await
    return await promise.then((data) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        if (data[i]) {
          const { name } = data[i];
          const { id } = data[i];
          self.admissionLevelMap[name] = id;
        }
      }
      return self.admissionLevelMap;
    });
  }

  // extract provinces into an object
  getPromiseOfProvinces() {
    const strQueryProvincesSql = DatabaseUtility.prepare(['chinese_name', 'id'], 'provinces');
    const findData = this.query1(strQueryProvincesSql);
    return findData;
  }

  async handleGetPromiseOfProvinces(promise) {
    const self = this;
    // eslint-disable-next-line no-return-await
    return await promise.then((data) => {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < data.length; i++) {
        if (data[i]) {
          const name = data[i].chinese_name;
          const { id } = data[i];
          self.provincesMap[name] = id;
        }
      }
      return self.provincesMap;
    });
  }
}


module.exports = DatabaseUtility;
