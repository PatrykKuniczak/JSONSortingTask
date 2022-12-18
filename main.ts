import * as fs from "fs";


export const removeDuplicates = JSONObject => {
    type NestedObject = { [key: string]: string | NestedObject };
    const parsedJSON: NestedObject[] = JSON.parse(JSONObject);

    const checkNestedProperties = (obj: object, otherObj: object) => {
        for (const [key, value] of Object.entries(obj)) {
            try {
                if (value instanceof Object) {
                    checkNestedProperties(value, otherObj[key]);

                    if (!Object.keys(otherObj[key]).length)
                        delete otherObj[key];
                } else if (otherObj[key] === value)
                    delete otherObj[key];
            } catch (err: any) {
            }
        }
    }

    parsedJSON.forEach(obj =>
        parsedJSON.forEach(otherObj => {
                if (obj !== otherObj)
                    checkNestedProperties(obj, otherObj)
            }
        )
    )

    return JSON.stringify(parsedJSON)
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