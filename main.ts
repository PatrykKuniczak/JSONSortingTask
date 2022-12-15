import * as fs from "fs";


export const removeDuplicates = JSONObject => {
    type NestedObject = { [key: string]: string | NestedObject };
    const parsedJSON: NestedObject[] = JSON.parse(JSONObject);

    const checkNestedProperties = (prop: string | object, propFromNextObj: string | object, otherObj: object) => {
        if (prop[1] === propFromNextObj[1])
            delete otherObj[propFromNextObj[0]];

        else if (prop[1] instanceof Object) {
            !Object.keys(otherObj[propFromNextObj[0]]).length ? delete otherObj[propFromNextObj[0]]
                : checkNestedProperties(Object.entries(prop[1]), Object.entries(propFromNextObj[1]), otherObj);
        }

    }

    parsedJSON.forEach(obj =>
        parsedJSON.forEach(otherObj => {
            if (obj !== otherObj)
                Object.entries(obj).forEach(prop =>
                    Object.entries(otherObj).forEach(propFromNextObj =>
                        checkNestedProperties(prop, propFromNextObj, otherObj))
                )
        })
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

// main("long.json", "created.json")