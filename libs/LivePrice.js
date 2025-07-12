
function getPrice(symbol) {
  var url = "https://api.twelvedata.com/price?symbol=" + symbol + "&apikey=3d3bcaf515d34107b07d81ef9ac48af9";
  var res = HTTP.get({
    url: url,
    success: function(response) {
      let data = JSON.parse(response.body);
      if (data && data.price) {
        return data.price;
      } else {
        return "❌ ناتوانرایەوە نرخ بخوێندرێتەوە.";
      }
    },
    error: function(err) {
      return "❌ هەڵە لەوەی خوێندنی نرخەکە.";
    }
  });
  return res;
}
publish({
  getPrice: getPrice
});
