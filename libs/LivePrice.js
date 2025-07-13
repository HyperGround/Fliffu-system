function getPrice(symbol) {
  let url;

  if(symbol === "XAUUSD"){
    url = "https://www.investing.com/currencies/xau-usd";
  } else {
    Bot.sendMessage("❌ نرخە زنده بۆ ئەم جووتە دراوە نییە: " + symbol);
    return null;
  }

  try {
    const res = HTTP.get({
      url: url,
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const html = res.body;

    // Regex بە هۆشیاری نرخەکە دەگرێت
    const match = html.match(/instrument-price-last">([0-9.,]+)/);
    if (!match) throw new Error("❌ ناتوانرێت نرخ بدۆزمەوە.");

    const price = parseFloat(match[1].replace(",", ""));
    return price;

  } catch (e) {
    Bot.sendMessage("❌ کێشە لە LivePrice:\n" + e.message);
    return null;
  }
}

publish({
  getPrice
});
