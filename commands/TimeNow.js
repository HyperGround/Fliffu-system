
/*CMD
  command: TimeNow
  help: Show current forex time
  keyboard:
  aliases:
CMD*/
let forexTime = Libs.DateTimeFormat.format(new Date(), "yyyy-MM-dd HH:mm:ss", "Europe/Athens");
Bot.sendMessage("🕒 کاتی ئێستا لە بازاڕی فۆڕێکس (GMT+3):\n" + forexTime);
