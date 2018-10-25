const fs = require('fs');

/**
 * Promise方式
 * @param fileName
 * @returns {Promise<any>}
 */
function readFile(fileName) {
    return new Promise((resolve,reject) => {
        fs.readFile(fileName,(err,data) => {
            if(err) reject(err);
            resolve(data);
        });
    });
}

// readFile('data/a.txt').then(res => {
//     console.log(res.toString());
//     return readFile('data/b.txt');
// }).then(res => {
//     console.log(res.toString());
//     return readFile('data/c.txt');
// }).then(res => {
//     console.log(res.toString());
// });

/**
 * generator方式
 */
function * gen() {
    yield readFile('data/a.txt');
    yield readFile('data/b.txt');
    yield readFile('data/c.txt');
}

let g = gen();
// g.next().value.then(res => {
//     console.log(res.toString());
//     return g.next().value;
// }).then(res => {
//     console.log(res.toString());
//     return g.next().value;
// }).then(res => {
//     console.log(res.toString());
// });

/**
 * async方式
 * @returns {Promise<void>}
 */
async function fn() {
    let f1 = await readFile('data/a.txt');
    console.log(f1.toString());
    let f2 = await readFile('data/b.txt');
    console.log(f2.toString());
}

fn();