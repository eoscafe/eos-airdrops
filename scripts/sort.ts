import fs from 'fs'

import tokens from "../tokens.json"

let count = 0
// sort tokens by name
tokens.sort((a, b) => {
    count++
    if (a.name[0].toLocaleLowerCase() < b.name[0].toLocaleLowerCase()) {
        return -1;
    }
    if (a.name[0].toLocaleLowerCase() > b.name[0].toLocaleLowerCase()) {
        return 1;
    }
    return 0;
});

console.log("Sorted", count, "tokens");

fs.writeFileSync('tokens.json', JSON.stringify(tokens, null, 4));