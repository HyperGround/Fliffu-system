// TwelveData API Key
const apiKey = "3d3bcaf515d34107b07d81ef9ac48af9";

function getPrice(symbol) {
  var url = "https://api.twelvedata.com/price?symbol=" + symbol + "&apikey=" + apiKey;
  
  try {
    let res = HTTP.get({ url: url });
    let data = JSON.parse(res.body);

    if (data && data.price) {
      return parseFloat(data.price);
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}

publish({
  getPrice: getPrice
});// TwelveData API Key
const apiKey = "3d3bcaf515d34107b07d81ef9ac48af9";

function getPrice(symbol) {
  var url = "https://api.twelvedata.com/price?symbol=" + symbol + "&apikey=" + apiKey;
  
  try {
    let res = HTTP.get({ url: url });
    let data = JSON.parse(res.body);

    if (data && data.price) {
      return parseFloat(data.price);
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
}

publish({
  getPrice: getPrice
});
