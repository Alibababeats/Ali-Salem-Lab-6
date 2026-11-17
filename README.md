# INST377 – Lab 5: Currency Converter (Fetch API)

**Due:** Monday, November 2 @ 11:59 PM (see ELMS for the current due date)
**Points:** 30

## Goal

Use the **Fetch API** in JavaScript to build a small currency converter that pulls real data from a public API. Part of this lab is learning to read API documentation on your own, so expect to do some research.

## Before You Start (Required)

1. Install the browser extension **Allow CORS: Access-Control-Allow-Origin**.
2. Turn it on (see `INST377-CORS-Extension-Demo.mp4` on ELMS).
3. This is crucial. Without it, your API requests may be blocked.

## API

Use the Frankfurter API: **https://www.frankfurter.app/docs/**

Read the docs to find:
- The endpoint that returns the list of **currencies**
- The endpoint that returns the **latest** conversion between a *from* and *to* currency

## Files

| File | What to do |
|------|------------|
| `index.html` | Build the form (dropdowns, number input, submit button) and a spot for the result |
| `script.js` | Load the currency options on page load, handle submit, call the API, show the result |
| `style.css` | Optional styling (a starting background color is provided) |

Open `index.html` with **VS Code Live Server** (it runs at `127.0.0.1:5500`).

## Desired Page

```
Let's Convert some Currency!

From Currency: [Australian Dollar   v]
To Currency:   [Indonesian Rupiah   v]
Number to Convert: [12        ]
[Submit]

12 AUD is equal to 120156 IDR
```

The result line should **not** appear until the user submits.

## Requirements (30 pts)

### 1. The Form (5 pts)
- [ ] The page has exactly **one** form
- [ ] One dropdown for the **From** currency
- [ ] One dropdown for the **To** currency
- [ ] One input that accepts numbers, **including decimals** like `11.10`, and is **required** (3 pts)

### 2. Data Loading (20 pts)
- [ ] **On window load**, dynamically fill **both** dropdowns with currency options
  - [ ] Use `fetch()` to get the data
  - [ ] Call the **GET Currencies** API to build the options
  - Hint: the JSON **key** (e.g. `AUD`) is the option's `value`; the JSON **value** (e.g. `Australian Dollar`) is the text the user sees
  - Hint: look up how to iterate through the keys/values of a JSON object
- [ ] **On submit**, convert the amount from the From currency to the To currency
  - [ ] Use the API to get the converted value (Hint: the **latest** endpoint with from/to)
  - [ ] Display the result on the page

### 3. Error States (5 pts)
- [ ] If the From and To currencies are the same, show an `alert()` saying they cannot convert to and from the same currency (and don't call the API)

## Tips

- Keep your JavaScript in `script.js`, not inline in the HTML.
- Look back at the lecture examples for `fetch()` and `.then()` / `async`/`await`.
- Use the browser **DevTools Console** (`console.log`) to inspect API responses before you write code that uses them.
- A form submit reloads the page by default. Find out how to stop that.

## Submission

Submit as directed on ELMS (Canvas or GitHub).

## Academic Integrity

You may use AI tools to study and practice, but the code you submit must be your own. Copying AI-generated answers results in a 0 for the assignment.
