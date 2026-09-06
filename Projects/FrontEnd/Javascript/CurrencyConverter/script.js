//First currency country is the country that we want to convert from
const firstCurrencyCountry = document.querySelector("#currency-first");
//First currency amount is the amount that we want to convert
const firstCurrencyAmount = document.querySelector("#worth-first");
//Second currency country is the country that we want to convert to
const secondCurrencyCountry = document.querySelector("#currency-second");
//Second currency amount is the amount that we will get after conversion
const secondCurrencyAmount = document.querySelector("#worth-second");
//Exchange rate is the rate at which the first currency will be converted to the second currency
const exchangeRate = document.querySelector("#exchange-rate");

//API URL :-
const API_URL = "https://v6.exchangerate-api.com/v6/28166f1ac430e81cc25b4d33/latest";

//Load All Event Listeners :-
function loadAllEvents() {
    firstCurrencyCountry.addEventListener("change", updateRate);
    secondCurrencyCountry.addEventListener("change", updateRate);
    firstCurrencyAmount.addEventListener("input", updateRate);
}
loadAllEvents();

//Update Rate Function :-
async function updateRate() {
    try {
        const response = await fetch(`${API_URL}/${firstCurrencyCountry.value}`);
        const data = await response.json();
        const rate = data.conversion_rates[secondCurrencyCountry.value];
        //Update the second currency amount and exchange rate text
        secondCurrencyAmount.value = (firstCurrencyAmount.value * rate).toFixed(3);
        //Update the exchange rate text
        exchangeRate.textContent = `1 ${firstCurrencyCountry.value} = ${rate} ${secondCurrencyCountry.value}`

    } catch (err) {
        console.log(err);
    }
}