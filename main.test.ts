import * as fs from "fs";
import {removeDuplicates} from "./main";


test("test test", () => {
    let forTestJSON;
    let testJSON;

    fs.readFile("forTest.json", 'utf8', async (err, data) => {
        if (err) throw err;
        forTestJSON = data;
    })

    fs.readFile("test.json", async (err, data) => {
        if (err) throw err;
        testJSON = data;
    })

    // expect(removeDuplicates(forTestJSON)).toEqual(testJSON);
})