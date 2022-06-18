## How to add a token?

Make a pull request with the following changes:

1. Add metadata to [`tokens.json`](tokens.json)

```json
{
    "name": "<NAME>",
    "logo": "https://raw.githubusercontent.com/ProtonProtocol/tokens/master/logos/<SYMBOL>.png",
    "logo_lg": "https://raw.githubusercontent.com/ProtonProtocol/tokens/master/logos/<SYMBOL>.png",
    "symbol": "<SYMBOL>",
    "account": "<CONTRACT NAME>",
    "chain": "proton"
}
```

2. Add token logo `*.png` to [`./logos`](./logos) folder
