import { APIClient } from "@wharfkit/antelope"
import tokens from "../tokens.json"
import { sleep } from "bun";

const client = new APIClient({url: "https://eos.api.eosnation.io"});
let start = false;
for ( const token of tokens) {
    if ( token.chain !== "eos" ) continue;
    if ( token.symbol == "EDNA" ) start = true;
    if ( !start ) continue;
    try {
        const stats = await client.v1.chain.get_currency_stats(token.account, token.symbol)
    } catch (e) {
        console.log(token);
    }
    await sleep(100)
}
