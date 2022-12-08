import * as fs from "fs";
import {removeDuplicates} from "./main";


test("test json filtering", () => {
    const forTestJSON = fs.readFileSync("forTest.json", 'utf8');
    const afterTestJSON = fs.readFileSync("afterTest.json", "utf8");

    expect(removeDuplicates(forTestJSON)).toMatch(afterTestJSON);
})