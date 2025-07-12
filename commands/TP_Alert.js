
/*CMD
  command: TP_Alert
  help: Alert when TP 1:2 is hit
  keyboard:
  aliases:
CMD*/
let pair = User.getProperty("pair");
Bot.sendMessage("📢 سڵاو، بەڕێز @" + user.username + "\n" +
"📌 مامەڵەکەت گەیشتووە بە TP 1:2 لە " + pair + "\n" +
"💰 لە لۆتی 0.1 بەرەوپێشچووی خۆشەویستمانت بەسوودە.\n\n" +
"🛑 دەتوانیت دابخەیتەوە یان SL بکەیت نزیک بە نرخەکە.\n" +
"📉 نرخ: 2011.00 | 📌 SL نوێ: 2010.00");
