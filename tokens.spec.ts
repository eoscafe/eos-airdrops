import tokens from "./tokens.json"
import {Asset, Name} from '@wharfkit/antelope'
import {expect, test} from 'bun:test'
import fs from "fs";

// Token-specific values
const BASE_URL = 'https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/logos/';
const CHAINS = ["eos", "telos", "wax", "proton"];

test('must be *.png or *.jpg', async () => {
    for ( const token of tokens ) {
        expect(token.logo).toMatch(/^https:\/\/.*\.(png|jpg)$/)
        expect(token.logo_lg).toMatch(/^https:\/\/.*\.(png|jpg)$/)
    }
})

test('matches url schema', async () => {
    for ( const token of tokens ) {
        expect(token.logo.startsWith(BASE_URL)).toBe(true)
        expect(token.logo_lg.startsWith(BASE_URL)).toBe(true)
    }
})

test('must be valid chain', async () => {
    for ( const token of tokens ) {
        expect(CHAINS.includes(token.chain)).toBe(true)
    }
})

test('missing logo file', async () => {
    for ( const token of tokens ) {
        // Check if the logo files exist locally
        expect(fs.existsSync(`./logos/${token.logo.replace(BASE_URL, '')}`)).toBe(true)
        expect(fs.existsSync(`./logos/${token.logo_lg.replace(BASE_URL, '')}`)).toBe(true)
    }
})

test('logo file not associated with a token', async () => {
    const logos = new Set();
    for ( const token of tokens ) {
        logos.add(token.logo.replace(BASE_URL, ''))
        logos.add(token.logo_lg.replace(BASE_URL, ''))
    }

    const files = fs.readdirSync('./logos');
    for ( const file of files ) {
        if ( file === ".DS_Store" ) continue;  // Skip system-specific files
        if ( !logos.has(file) ) {
            console.log("removed file:", file)
            fs.rmSync(`./logos/${file}`)
        }
        expect(logos.has(file)).toBe(true) // Ensure logos are properly linked
    }
})

test('must be valid account name', async () => {
    for ( const token of tokens ) {
        expect(Name.from(token.account).toString()).toBe(token.account)
    }
})

test('must be valid symbol', async () => {
    for ( const token of tokens ) {
        expect(Asset.SymbolCode.from(token.symbol).toString()).toBe(token.symbol)
    }
})

test('token name must be sorted alphabetically', async () => {
    let last = '';
    for ( const token of tokens ) {
        if (last === '') {
            last = token.name
            continue
        }
        // Ensure that token names are sorted alphabetically
        expect(token.name[0].toLocaleLowerCase() >= last[0].toLocaleLowerCase()).toBe(true)
        last = token.name
    }
})

test('no duplicate tokens', async () => {
    let last = '';
    for ( const token of tokens ) {
        const token_key = `${token.chain},${token.symbol},${token.account}`;
        // Ensure there are no duplicate tokens based on chain, symbol, and account
        if ( last === token_key ) console.log(last, token_key)
        expect(last != token_key).toBe(true)
        last = token_key
    }
})
