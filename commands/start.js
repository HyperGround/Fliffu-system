
/*CMD
  command: /start
  help: Start bot interaction
  keyboard:
  aliases:
CMD*/

let keys = [
  [
    { title: "XAUUSD", command: "XAUUSD" },
    { title: "EURUSD", command: "EURUSD" }
  ],
  [
    { title: "JPYUSD", command: "JPYUSD" },
    { title: "BTCUSD", command: "BTCUSD" },
    { title: "ETC.", command: "ETC." }
  ]
];
Bot.sendInlineKeyboard(keys, "📌 تکایە جوت‌دراوەکە هەلبژێرە:");
