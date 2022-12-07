import * as fs from "fs";


export const removeDuplicates = (JSONObject) => {
    const setWithoutIdAndType: Set<object> = new Set();
    const setWithRest: Set<object> = new Set();

    JSON.parse(JSONObject).forEach(({id, type, ...object}) => {
        setWithoutIdAndType.add(object)
        setWithRest.add({id, type})
    });

    return Array.from(setWithoutIdAndType).map((object, index) => ({...setWithRest[index], ...object}));
}

const main = (openPath, newPath) =>
    fs.readFile(openPath, 'utf8', async (err, data) => {
        if (err) throw err;

        fs.writeFile(newPath, JSON.stringify(removeDuplicates(data)), {flag: "a"}, err => {
            if (err) throw err;
        });
    });


main("long.json", "new.json");