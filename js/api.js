
class Api {
    constructor(apikey){
        this.apikey = apikey;
    }

    async getData() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        const call = await fetch(url);
        const result = await call.json();
        return result.Data;
    };

    async getExchange(coin, criptoCoin){
        
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}&api_key=${this.apikey}`;
        const call = await fetch(url);
        const result = await call.json();
        console.log(result);
        return result.RAW;
    }
}