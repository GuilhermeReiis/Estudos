const fetch = require("node-fetch");

const url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";

fetch(url)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
