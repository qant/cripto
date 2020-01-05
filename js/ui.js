class Interface {
  constructor() {
    this.fillCriptoOptions();
  }

  fillCriptoOptions() {
    myapi.getData().then(criptas => {
      console.log(criptas.coins.Data);
      console.log(criptas.coins);
      const criptomoney = document.querySelector("#criptomoneda");
      let opt = "";

      for (const [key, value] of Object.entries(criptas.coins.Data)) {
        if (value.IsTrading) {
          console.log(value);
          opt += `<option value="${value.Symbol}">${value.FullName}</option>`;
        }
      }
      criptomoney.innerHTML = opt;
    });
  }

  /**
   * Show message with text and classes of boostrap 4, remove after 2sekonds
   * @param {*} text
   * @param {*} classes
   */
  showMessage(text, classes) {
    const div = document.createElement("div");
    div.className = classes;
    div.appendChild(document.createTextNode(text));
    const message = document.querySelector(".mensajes");
    message.appendChild(div);
    setTimeout(message => {
      document.querySelector(".mensajes div").remove();
    }, 2000);
  }
}
