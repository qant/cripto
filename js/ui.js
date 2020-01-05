class Interface {
  constructor() {
    this.fillCriptoOptions();
  }

  fillCriptoOptions() {
    myapi.getData().then(criptas => {
      console.log(criptas);
    });
    const criptomoney = document.querySelector("#criptomoneda");
    let opt = "";

    //console.log(Object.keys(data));
    // Object.keys(data.Data).forEach(item => {
    //   //opt += `<option>${item.Data.CoinName}</option>`;
    //   console.log(data.Data.item);
    // });
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
