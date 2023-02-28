let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.73;
let ratePLN = 1.00;
let rateGBP = 5.37;
let rateCHF = 4.78;
let rateUSD = 4.46;

formElement.addEventListener("input", () => {
    let currency = currencyElement.value;
    let amount = amountElement.value;
    let exchange = exchangeElement.value;
    let result = resultElement.value;

switch (true) {

    case currency === "EUR" && exchange === "EUR":
        result = amount / rateEUR * rateEUR;
        break;

    case currency === "EUR" && exchange === "PLN":
        result = amount / ratePLN * rateEUR;
        break;

    case currency === "EUR" && exchange === "GBP":
        result = amount / rateGBP * rateEUR;
        break;

    case currency === "EUR" && exchange === "CHF":
        result = amount / rateCHF * rateEUR;
        break;

    case currency === "EUR" && exchange === "USD":
        result = amount / rateUSD * rateEUR;
        break;


    case currency === "PLN" && exchange === "EUR":
        result = amount / rateEUR * ratePLN;
        break;

    case currency === "PLN" && exchange === "PLN":
        result = amount / ratePLN * ratePLN;
        break;

    case currency === "PLN" && exchange === "GBP":
        result = amount / rateGBP * ratePLN;
        break;

    case currency === "PLN" && exchange === "CHF":
        result = amount / rateCHF * ratePLN;
        break;

    case currency === "PLN" && exchange === "USD":
        result = amount / rateUSD * ratePLN;
        break;


    case currency === "GBP" && exchange === "EUR":
        result = amount / rateEUR * rateGBP;
        break;

    case currency === "GBP" && exchange === "PLN":
        result = amount / ratePLN * rateGBP;
        break;

    case currency === "GBP" && exchange === "GBP":
        result = amount / rateGBP * rateGBP;
        break;

    case currency === "GBP" && exchange === "CHF":
        result = amount / rateCHF * rateGBP;
        break;

    case currency === "GBP" && exchange === "USD":
        result = amount / rateUSD * rateGBP;
        break;


    case currency === "CHF" && exchange === "EUR":
        result = amount / rateEUR * rateCHF;
        break;

    case currency === "CHF" && exchange === "PLN":
        result = amount / ratePLN * rateCHF;
        break;

    case currency === "CHF" && exchange === "GBP":
        result = amount / rateGBP * rateCHF;
        break;

    case currency === "CHF" && exchange === "CHF":
        result = amount / rateCHF * rateCHF;
        break;

    case currency === "CHF" && exchange === "USD":
        result = amount / rateUSD * rateCHF;
        break;


    case currency === "USD" && exchange === "EUR":
        result = amount / rateEUR * rateUSD;
        break;

    case currency === "USD" && exchange === "PLN":
        result = amount / ratePLN * rateUSD;
        break;

    case currency === "USD" && exchange === "GBP":
        result = amount / rateGBP * rateUSD;
        break;

    case currency === "USD" && exchange === "CHF":
        result = amount / rateCHF * rateUSD;
        break;

    case currency === "USD" && exchange === "USD":
        result = amount / rateUSD * rateUSD;
        break;
}

resultElement.value = `${result.toFixed(2)} ${exchange}`;

});