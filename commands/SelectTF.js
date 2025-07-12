
/*CMD
  command: SelectTF
  help: choose timeframe
  keyboard:
  aliases:
CMD*/
let timeframes = [
  [{ title: "1m", command: "TF_1m" }, { title: "5m", command: "TF_5m" }],
  [{ title: "15m", command: "TF_15m" }, { title: "1h", command: "TF_1h" }],
  [{ title: "4h", command: "TF_4h" }, { title: "1d", command: "TF_1d" }],
  [{ title: "1w", command: "TF_1w" }]
];
Bot.sendInlineKeyboard(timeframes, "🕒 تایمفرەیمەکە هەلبژێرە:");
