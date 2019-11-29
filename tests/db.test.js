const DB = require('../utility/db');
var db = new DB();

test('mysql select prepare', () => {
    expect(DB.prepare()).toBe('SELECT `*` FROM `users` WHERE `id` = 1');
    expect(DB.prepare(['id', 'name'], 'level', 100)).toBe('SELECT `id`, `name` FROM `level` WHERE `id` = 100');
});
test('mysql select test', () => {
    expect.assertions(1);
    return db.query('select 1+1').then(function(result) {
        expect(result[0]['1+1'] == 2).toEqual(true);
    }).catch((err) => setImmediate(() => { throw err }));
});

//step3: databae operations. Test whether a specific record is in table.