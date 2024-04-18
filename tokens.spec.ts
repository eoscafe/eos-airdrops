import tokens from "./tokens.json"
import {Asset, Int64, Name} from '@wharfkit/antelope'
import {describe, expect, test} from 'bun:test'
import fs from "fs";

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
        expect(logos.has(file)).toBe(true)
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