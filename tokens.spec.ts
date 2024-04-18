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
        logos.add(token.logo.replace(BASE_URL, '').toLocaleLowerCase())
        logos.add(token.logo_lg.replace(BASE_URL, '').toLocaleLowerCase())
    }

    const files = fs.readdirSync('./logos');
    for ( const file of files ) {
        // if ( !logos.has(file.toLocaleLowerCase())) {
        //     fs.rmSync(`./logos/${file}`)
        // }
        expect(logos.has(file.toLocaleLowerCase())).toBe(true)
    }
})