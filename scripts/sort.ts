import fs from 'fs'

import tokens from "../tokens.json"

// sort tokens by name
tokens.sort((a, b) => {
    if (a.name[0].toLocaleLowerCase() < b.name[0].toLocaleLowerCase()) {
        return -1;
    }
    if (a.name[0].toLocaleLowerCase() > b.name[0].toLocaleLowerCase()) {
        return 1;
    }
    return 0;
});

fs.writeFileSync('tokens.json', JSON.stringify(tokens, null, 4));