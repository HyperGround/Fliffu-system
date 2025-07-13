let LivePrice = {
  getPrice: function (symbol) {
    let url;

    if (symbol === "XAUUSD") {
      url = "https://www.investing.com/commodities/gold";
    } else if (symbol === "EURUSD") {
      url = "https://www.investing.com/currencies/eur-usd";
    } else if (symbol === "ETHUSD") {
      url = "https://www.investing.com/crypto/ethereum/eth-usd";
    } else if (symbol === "JPYUSD") {
      url = "https://www.investing.com/currencies/usd-jpy";
    } else {
      Bot.sendMessage("❌ Asset نادیاریە. تەنها XAUUSD, EURUSD, ETHUSD, JPYUSD بەردەستە.");
      return null;
    }

    let html = HTTP.get({
      url: url,
      success: "/onPriceLoaded",
      error: "/onPriceError",
      async: false
    });

    if (!html || !html.body) {
      Bot.sendMessage("❌ کێشەی داواکاری: هیچ وەڵامێک نەهاتووە.");
      return null;
    }

    // Regex لەسەر ڕووکاری HTML بۆ دۆزینەوەی نرخ
    let match = html.body.match(/data-test="instrument-price-last">([^<]+)</);
    if (match && match[1]) {
      let price = parseFloat(match[1].replace(/,/g, ""));
      return price;
    } else {
      Bot.sendMessage("❌ ناتوانرێت نرخەکە بدۆزرێتەوە.");
      return null;
    }
  }
}

publish({
  getPrice: LivePrice.getPrice
});
