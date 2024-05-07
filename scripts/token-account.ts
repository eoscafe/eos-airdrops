import { APIClient } from "@wharfkit/antelope"
import tokens from "../tokens.json"
import { sleep } from "bun";

let start = false;
console.log("Checking tokens if exists...")
for ( const token of tokens) {
    const client = new APIClient({url: `https://${token.chain}.greymass.com`});
    // if ( token.chain !== "proton" ) continue;
    // if ( token.chain === "eos" ) continue;
    // if ( token.symbol == "EDNA" ) start = true;
    // if ( !start ) continue;
    try {
        await client.v1.chain.get_currency_stats(token.account, token.symbol)
        process.stdout.write(token.symbol + " ");
    } catch (e) {
        console.log(token.symbol, "❌")
        console.log(token);
    }
    await sleep(100)
}
