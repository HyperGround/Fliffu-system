// LivePrice.js

function getPrice(symbol) { // Convert symbol to Yahoo format const yahooSymbol = formatToYahooSymbol(symbol); const url = "https://query1.finance.yahoo.com/v8/finance/chart/" + yahooSymbol + "?interval=1m&range=1d";

const response = HTTP.get(url); if (!response || !response.body) { throw new Error("✖️ وەڵامی بەتاڵ هاتووە (No response)"); }

const json = JSON.parse(response.body); try { const result = json.chart.result[0]; const lastClose = result.indicators.quote[0].close.pop(); if (!lastClose) { throw new Error("✖️ ناتوانرێت نرخ بخوێندرێتەوە (No close data)"); } return parseFloat(lastClose); } catch (e) { throw new Error("✖️ کێشە لە خوێندنی نرخ: " + e.message); } }

function formatToYahooSymbol(symbol) { // Example: XAUUSD -> XAUUSD=X const pairs = { "XAUUSD": "XAUUSD=X", "EURUSD": "EURUSD=X", "USDJPY": "JPY=X", "BTCUSD": "BTC-USD", "ETHUSD": "ETH-USD" // Add more as needed };

return pairs[symbol] || (symbol + "=X"); }

publish({ getPrice: getPrice });

