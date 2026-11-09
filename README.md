# SD-PO-Help-Site
Presiding Officer toolkit for NSDA Student Congress: speech/questioning timer, precedence & recency tracker, parliamentary procedure guide, vote counter, and PO scripts.

## Run

ES modules need an HTTP server (not `file://`):

```sh
npm start   # http://localhost:8000
npm test    # unit tests for precedence and voting logic
```

## Layout

```
index.html            page shell
src/main.js           entry point; wires features together
src/core/             pure logic and helpers (precedence, voting, storage, dom)
src/features/         one UI module per tab (timer, precedence, motions, voting, scripts, tabs)
src/data/             motions table and PO scripts (edit rules here)
src/styles/main.css
tests/                node:test unit tests
```

Rules content is a study aid; verify against the current NSDA rules and your tournament's Congress rules.
