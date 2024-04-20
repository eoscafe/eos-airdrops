## How to add token?

- [ ] Add metadata to [`tokens.json`](tokens.json)

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

- [ ] Add token logo `*.png` or `*.jpg` to [`./logos`](./logos) folder

- [ ] Supported chains:
  - eos
  - telos
  - wax
  - proton

- [ ] Token `name` must be sorted alphabetically in `tokens.json`
- [ ] logo URL must start with `https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/logos/<SYMBOL>.png`