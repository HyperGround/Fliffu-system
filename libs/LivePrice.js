// lib/LivePrice.js

// ✅ نوسرا بۆ TwelveData - نرخی ڕاستەوخۆ
// 🌐 API Docs: https://twelvedata.com/docs#price

const TD_API_KEY = "3d3bcaf515d34107b07d81ef9ac48af9"; // API Keyەکەت لێرە دانێ

function getPrice(symbol) {
  var url = "https://api.twelvedata.com/price?symbol=" + symbol + "&apikey=" + TD_API_KEY;

  try {
    let res = HTTP.get({ url: url });
    if (!res || !res.body) {
      throw new Error("✖️ وەڵامی بەتاڵ هاتووە");
    }

    let data = JSON.parse(res.body);

    if (data.status === "error") {
      throw new Error("API Error: " + data.message);
    }

    if (data && data.price) {
      return parseFloat(data.price);
    } else {
      throw new Error("✖️ ناتوانرێ نرخ بخوێندرێتەوە");
    }

  } catch (err) {
    Bot.sendMessage("❌ هەڵە لە LivePrice:\n" + err.message);
    return null;
  }
}

// 📤 بەشکردنی فانکشنی getPrice بۆ بەکارهێنان لە کۆمڕاندەکاندا
publish({
  getPrice: getPrice
});
