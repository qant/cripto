//https://www.cryptocompare.com/cryptopian/api-keys

const form = document.getElementById("formulario");
const myapi = new API(
  "3023630ec634cd947aa6ca3db3888ccbe3c95c82ee8030980b6c043fe75b4846"
);
const ui = new Interface();
myapi.getData();

form.addEventListener("submit", e => {
  e.preventDefault();
  const money = document.getElementById("moneda");
  const moneySelected = money.options[money.selectedIndex].value;
  const criptomoney = document.getElementById("criptomoneda");
  const criptomoneySelected =
    criptomoney.options[criptomoney.selectedIndex].value;
  if (criptomoneySelected === "" || moneySelected === "") {
    console.error("Select money and cripto!");
    ui.showMessage(
      "Both fields are mandatory!",
      "alert text-center bg-danger",
      2000
    );
  } else {
    console.info("Selected money and cripto fetch data!");
    myapi
      .getPriceData(criptomoneySelected, moneySelected)
      .then(priceData => {
        ui.showPrices(priceData, criptomoneySelected, moneySelected);
      })
      .catch(err => {
        console.error("Err here!", err);
        ui.showMessage(err, "alert bg-danger", 5000);
      });
  }
});
