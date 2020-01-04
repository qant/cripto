//https://www.cryptocompare.com/cryptopian/api-keys

const form = document.getElementById("formulario");

form.addEventListener("submit", e => {
  e.preventDefault();
  console.log("Submitted!");
  const money = document.getElementById("moneda");
  //const money1 = document.querySelector("#moneda");
  const moneySelected = money.options[money.selectedIndex].value;
  console.log(money);
  console.log(moneySelected);
  const criptomoney = document.getElementById("criptomoneda");
  const criptomoneySelected =
    criptomoney.options[criptomoney.selectedIndex].value;
  console.log(criptomoneySelected);
  if (criptomoneySelected === "" || moneySelected === "") {
    console.error("Select money and cripto!");
  } else {
    console.info("Selected money and cripto fetch data!");
  }
});
