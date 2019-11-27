const DB = require('../utility/db');
var db = new DB();

test('mysql select prepare', () => {
    expect(DB.prepare()).toBe('SELECT `*` FROM `users` WHERE `id` = 1');
    expect(DB.prepare(['id', 'name'], 'level', 100)).toBe('SELECT `id`, `name` FROM `level` WHERE `id` = 100');
});

test('mysql select test', (done) => {
    expect.assertions(1);
    return db.query('select 1+1').then(function(result) {
        expect(result[0]['1+1'] == 2).toEqual(true);
        done();
    }).catch((err) => setImmediate(() => { throw err }));
});

test('should throw an error if result is not 2 [ASYNC/AWAIT]', async (done) => {
    try {
        var test = await db.asyncQuery('select 1+1');
        console.log('test:', test);
        expect(typeof test).toBe('object');
        expect(test[0]['1+1']).toBe(2);
        done();
    } catch (error) {
        expect(error.message).toBe('User with id: 11 was not found.');
    }
});

afterAll(() => {
    db.dbClose();
});