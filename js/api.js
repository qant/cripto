class API {
  constructor(apikey) {
    this.API_KEY = apikey;
    this.allCoinListUrl = "https://min-api.cryptocompare.com/data/all/coinlist";
    this.getData(this.API_KEY, this.allCoinListUrl);
  }

  async getData(allCoinListUrl) {
    const url = `${this.allCoinListUrl}?api_key=${this.API_KEY}`;
    const urlCoins = await fetch(url);
    const coins = await urlCoins.json();
    return { coins };
  }

  async getPriceData(money, coin) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coin}&tsyms=${money}&api_key=${this.API_KEY}`;
    const urlPrice = await fetch(url);
    const price = await urlPrice.json();
    if ("Error" !== price.Response) {
      return { price };
    } else {
      const error = price.Message;
      return { error };
    }
  }
}
