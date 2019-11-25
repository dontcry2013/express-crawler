const DB = require('../utility/db');
var db = new DB();

test('mysql select prepare', () => {
    expect(DB.prepare()).toBe('SELECT `*` FROM `users`');
    expect(DB.prepare(['id', 'name'], 'level', '`id` = 100')).toBe('SELECT `id`, `name` FROM `level` WHERE `id` = 100');
});

test('mysql select test', () => {
    expect.assertions(1);
    return db.query('select 1+1').then(function(result) {
        expect(result[0]['1+1'] == 2).toEqual(true);
    }).catch((err) => setImmediate(() => { throw err }));
});

test('mysql admission level select test', () => {
    expect.assertions(1);
    var admission_levelid = {};
    var db = new DB();
    return db.getPromiseOfAdmissionLevel().then(function(data){
        for(var i = 0; i < data.length; i++){
            var name = data[i]['name'];
            var id = data[i]['id'];
            admission_levelid[name] = id;
        }
        console.log(33, admission_levelid);
        expect(admission_levelid['汉语本科一批']).toEqual(114);
    });
});

test('mysql provinces select test', () => {
    expect.assertions(1);
    var provinces = {};
    var db = new DB();
    return db.getPromiseOfProvinces().then(function(data){
        for(var i = 0; i < data.length; i++){
            var name = data[i]['chinese_name'];
            var id = data[i]['id'];
            provinces[name] = id;
        }
        console.log(44, provinces);
        expect(provinces['北京']).toEqual(3);
    });
});