## How to add a token?

Make a pull request with the following changes:

- 1. Add metadata to [`tokens.json`](tokens.json)

```json
{
    "name": "<NAME>",
    "logo": "https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/logos/<SYMBOL>.png",
    "logo_lg": "https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/logos/<SYMBOL>.png",
    "symbol": "<SYMBOL>",
    "account": "<CONTRACT NAME>",
    "chain": "<chain>"
}
```

- 2. Add token logo `*.png` or `*.jpg` to [`./logos`](./logos) folder

- 3. Supported chains:
  - `eos`
  - `telos`
  - `wax`
  - `proton`

- 4. Token `name` must be sorted alphabetically in `tokens.json`
- 5. logo URL must start with `https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/logos/<SYMBOL>.png`