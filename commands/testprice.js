/*CMD
  command: /testPrice
  help: test live price
  need_reply: false
  auto_retry_time:
  folder:
  answer:
  keyboard:
  aliases:
CMD*/

let price = Libs.LivePrice.getPrice("XAUUSD");

if (!price) {
  Bot.sendMessage("❌ ناتوانرایەوە نرخی زنده بۆ XAUUSD");
} else {
  Bot.sendMessage("✅ نرخی زنده XAUUSD: " + price);
}
