const { EventEmitter } = require('events');
const DatabaseUtility = require('../utility/db');
// eslint-disable-next-line no-unused-vars
const event = new EventEmitter();
const db = new DatabaseUtility();


test('mysql select prepare', () => {
  expect(DatabaseUtility.prepare()).toBe('SELECT `*` FROM `users`');
  expect(DatabaseUtility.prepare(['id', 'name'], 'level', 100)).toBe('SELECT `id`, `name` FROM `level` WHERE `id` = 100');
});

test('mysql select test', (done) => {
  expect.assertions(1);
  return db.query1('select 1+1').then((result) => {
    expect(result[0]['1+1'] === 2).toEqual(true);
    done();
  }).catch((err) => setImmediate(() => { throw err }));
});

test('mysql admission level select test', () => {
  expect.assertions(1);
  const admissionLevelid = {};
  return db.getPromiseOfAdmissionLevel().then((data) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
      const { name } = data[i];
      const { id } = data[i];
      admissionLevelid[name] = id;
    }

    expect(admissionLevelid['汉语本科一批']).toEqual(114);
  });
});

test('mysql provinces select test', () => {
  expect.assertions(1);
  const provinces = {};
  return db.getPromiseOfProvinces().then((data) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
      const name = data[i].chinese_name;
      const { id } = data[i];
      provinces[name] = id;
    }

    expect(provinces['北京']).toEqual(3);
  });
});
// step3: databae operations. Test whether a specific record is in table.

test('should throw an error if result is not 2 [ASYNC/AWAIT]', async (done) => {
  try {
    const test = await db.asyncQuery('select 1+1');
    expect(typeof test).toBe('object');
    expect(test[0]['1+1']).toBe(2);
    done();
  } catch (error) {
    expect(error.message).toBe('User with id: 11 was not found.');
  }
});

// a demo for Lauren
test('should get the admission level map', async (done) => {
  try {
    const admissionLevelPromise = db.getPromiseOfAdmissionLevel();
    await db.handleGetPromiseOfAdmissionLevel(admissionLevelPromise);

    expect(db.admissionLevelMap['自主招生线']).toBe(2);
    expect(db.admissionLevelMap['三批']).toBe(11);
    expect(db.admissionLevelMap['第三批']).toBe(60);
    expect(db.admissionLevelMap['二批B']).toBe(89);
    expect(db.admissionLevelMap['牛奶']).toBe(undefined);
    done();
  } catch (error) {
    console.error(error.message);
  }
});


test('test the insert data', async (done) => {
  try {
    const sql = 'SELECT score FROM `ncee_fraction_lines` WHERE `province_id` = ? AND `year` = ? AND `art_science_division` = ? AND `level`= ?';
    const sqlParams = ['3', '2019', 'art', '1'];
    db.connection.query(sql, sqlParams, (err, result) => {
      console.log(result);
      expect(result[0].score).toBe(480);
      done();
    });
  } catch (error) {
    console.error(error.message);
  }
});

afterAll(() => {
  db.dbClose();
});
