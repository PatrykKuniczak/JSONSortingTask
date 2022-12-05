import * as fs from "fs";


fs.readFile('./long.json', 'utf8', (err, data) => {
    const start = +new Date();
    if (err) throw err;
    const dataWithoutId = JSON.parse(data).map(({id, ...object}) => object);
    const uniqueSet = new Set();

    dataWithoutId.forEach(object => uniqueSet.add(JSON.stringify(object)));

    const uniqueList = Array.from(uniqueSet).map(string => JSON.parse(string));

    fs.writeFile('./new.json', JSON.stringify(uniqueList), {flag: "a"}, err => {
        if (err) throw err;
    });

    const end = +new Date();
    console.log(end - start)
});