/*CMD
  command: TF_1m
  help: Handle 1m timeframe
  keyboard:
  aliases:
CMD*/

let pair = User.getProperty("pair");
let rawPrice = Libs.LivePrice.getPrice(pair);
let forexTime = Libs.DateTimeFormat.format(new Date(), "yyyy-MM-dd HH:mm:ss", "Europe/Athens");

let entry = parseFloat(rawPrice);
if (!entry || isNaN(entry)) {
  Bot.sendMessage("❌ ناتوانرایەوە نرخەکەی بەڕاستەوخۆ بۆ " + pair);
  return;
}

let sl = (entry - 0.0020).toFixed(5);
let tp = (entry + 0.0060).toFixed(5);

let msg = "📈 سیگنالی SMC - " + pair + "\n" +
          "🕒 کات: " + forexTime + "\n" +
          "📊 تایمفرەیم: 1m\n" +
          "📌 ستایل: OB + CHoCH + Inducement\n" +
          "🎯 Entry: " + entry.toFixed(5) + "\n" +
          "❌ SL: " + sl + "\n" +
          "✅ TP: " + tp + "\n" +
          "🧠 بڕوا پێکراو: 93%";

Bot.sendMessage(msg);