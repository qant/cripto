class Interface {
  constructor() {
    this.fillCriptoOptions();
  }

  fillCriptoOptions() {
    myapi.getData().then(criptas => {
      //console.log(criptas.coins.Data);
      //console.log(criptas.coins);
      let timer = "options";
      console.time(timer);
      const criptomoney = document.querySelector("#criptomoneda");
      let opt = "";
      for (const [key, value] of Object.entries(criptas.coins.Data)) {
        //todo: sort value for something
        if (value.IsTrading) {
          //console.log(value);
          //opt += `<option value="${value.Symbol}">${value.FullName}</option>`;
          const option = document.createElement("option");
          option.value = value.Symbol;
          option.appendChild(document.createTextNode(value.FullName));
          criptomoney.appendChild(option);
        }
      }
      //criptomoney.innerHTML = opt;
      console.timeEnd(timer);
    });
  }

  showPrices(priceData, cripto, money) {
    let html = "";
    const result = document.querySelector("#resultado");
    const price = priceData.price.RAW[money][cripto];
    const showPrice = price.PRICE.toFixed(6);
    const date = new Date(price.LASTUPDATE * 1000).toLocaleString("es-ES");
    console.log(price);
    html += `
    <div class="alert bg-success">
    <h3>Result:</h3>
    <p>Price from ${price.FROMSYMBOL} to ${price.TOSYMBOL} is ${showPrice} </p>
    </p>Traided on Last upDate: ${date}
    </p>
    </div>
    `;
    result.innerHTML = html;
    // console.log(priceData.price);
    // console.log(priceData.price.DISPLAY);
    // console.log(priceData.price.RAW);
    // console.log(priceData.price.RAW[money]);
    // console.log(priceData.price.RAW[money][cripto]);
    // console.log(priceData.price.DISPLAY[money]);
    // console.log(priceData.price.DISPLAY[money][cripto]);
  }

  /**
   * Show message with text and classes of boostrap 4, remove after 2sekonds
   * @param {*} text
   * @param {*} classes
   */
  showMessage(text, classes, timeout) {
    const div = document.createElement("div");
    div.className = classes;
    div.appendChild(document.createTextNode(text));
    const message = document.querySelector(".mensajes");
    message.appendChild(div);
    setTimeout(message => {
      document.querySelector(".mensajes div").remove();
    }, timeout);
  }
}
