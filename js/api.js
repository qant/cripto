class API {
  constructor(apikey) {
    this.API_KEY = apikey;
    this.allCoinListUrl = "https://min-api.cryptocompare.com/data/all/coinlist";
    console.log(`${this.allCoinListUrl}?api_key=${this.API_KEY}`);
    this.getData(this.API_KEY, this.allCoinListUrl);
  }

  async getData(API_KEY, allCoinListUrl) {
    const url = `${this.allCoinListUrl}?api_key=${this.API_KEY}`;
    const urlCoins = await fetch(url);
    const coins = await urlCoins.json();
    return { coins };
  }
}
