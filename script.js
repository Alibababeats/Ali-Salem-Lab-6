// INST377 - Lab 5: Currency Converter
// API docs: https://www.frankfurter.app/docs/
// Reminder: turn on the "Allow CORS" browser extension before testing!

const API = "https://api.frankfurter.app";
// ---------------------------------------------------------------
// Requirement 2a: Load the currency options when the page loads
// ---------------------------------------------------------------
function loadCurrencies() {
  // TODO: Use fetch() to call the GET Currencies endpoint (see the API docs).

  // TODO: Convert the response to JSON.

  // TODO: Loop through the JSON object.
  //   - The KEY (e.g. "AUD") should be the <option>'s value
  //   - The VALUE (e.g. "Australian Dollar") should be the <option>'s text
  //   Add an option to BOTH the From and To dropdowns.

  // Tip: console.log() the JSON first so you can see its shape.
  fetch(`${API}/currencies`)

    .then(response => response.json())
    .then(currencies => {
      const fromDropdown = document.getElementById("from-currency");
      const toDropdown = document.getElementById("to-currency");

    Object.entries(currencies).forEach(([code, name]) => {
      fromDropdown.add(new Option(name, code));
      toDropdown.add(new Option(name, code));
      });
    })
    .catch(error => {
      console.error(error);
    });
}


// ---------------------------------------------------------------
// Requirement 2b + 3: Convert the currency when the form is submitted
// ---------------------------------------------------------------
function convertCurrency(event) {
  // TODO: Stop the form from reloading the page.

  // TODO: Read the From currency, To currency, and amount from the form.

  // TODO (Requirement 3): If From and To are the same, show an alert()
  //   saying the user cannot convert to and from the same currency,
  //   then stop (don't call the API).

  // TODO: Use fetch() to call the "latest" endpoint with the amount,
  //   from currency, and to currency (check the docs for the exact URL format).

  // TODO: Display the result on the page, e.g.
  //   "12 AUD is equal to 120156 IDR"
  event.preventDefault();
  
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const amount = document.getElementById("amount").value;

  if (fromCurrency === toCurrency) {
    alert("You cannot convert the same currency.");
    return;
  }
  const url = `${API}/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").textContent =
        `${amount} ${fromCurrency} is equal to ${data.rates[toCurrency]} ${toCurrency}`;
    })
    .catch(error => {
      console.error(error);
    });
}




// ---------------------------------------------------------------
// Wire everything up
// ---------------------------------------------------------------

// TODO: When the window loads, call loadCurrencies().

// TODO: When the form is submitted, call convertCurrency().

window.addEventListener("load", loadCurrencies);
document.getElementById("currency-form").addEventListener("submit", convertCurrency);