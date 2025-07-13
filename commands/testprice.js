/*CMD
  command: /testPrice
  help: test price fetch
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let p = Libs.LivePrice.getPrice("XAU/USD"); // ئەمە دەکرێت ETH/USD، EUR/USD، BTC/USD...

if (!p) {
  Bot.sendMessage("❌ ناتوانرێت نرخی زنده بخوێندرێتەوە.");
} else {
  Bot.sendMessage("📈 نرخی زنده XAU/USD: " + p);
}
