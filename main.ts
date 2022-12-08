import * as fs from "fs";


export const removeDuplicates = (JSONObject) => {
    const setWithoutIdAndType: Set<string> = new Set();
    const arrayWithRest: Array<string> = [];

    JSON.parse(JSONObject).forEach(({id, type, ...object}) => {
        if (!setWithoutIdAndType.has(JSON.stringify(object))) {
            setWithoutIdAndType.add(JSON.stringify(object));
            arrayWithRest.push(JSON.stringify({type, id}));
        }
    });

    const parsedFirstJSON = [...setWithoutIdAndType].map(obj => JSON.parse(obj));
    const parsedSecondJSON = [...arrayWithRest].map(obj => JSON.parse(obj));

    return JSON.stringify(parsedFirstJSON.map((object, index) => ({...parsedSecondJSON[index], ...object})));
}

const main = (openPath, newPath) =>
    fs.readFile(openPath, 'utf8', async (err, data) => {
        const start = performance.now();
        if (err) throw err;

        fs.writeFile(newPath, removeDuplicates(data), {flag: "w"}, err => {
            if (err) throw err;
        });

        console.log(performance.now() - start);
    });

main("long.json", "created.json")