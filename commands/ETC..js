
/*CMD
  command: ETC.
  help: More options
  keyboard:
  aliases:
CMD*/
let extra = [
  [{ title: "💠 VIP Signals", command: "VIP" }],
  [{ title: "📈 Backtest", command: "Backtest" }],
  [{ title: "⚙️ Settings", command: "Settings" }],
  [{ title: "🕒 Time Now", command: "TimeNow" }],
  [{ title: "🔙 Back", command: "/start" }]
];
Bot.sendInlineKeyboard(extra, "🔧 هەلبژاردەی زیاتر:");
