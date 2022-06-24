const { Telegraf, Markup } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    "Познакомьтесь с нашей командой",
    Markup.keyboard([
      { text: "🔥 Команда 🔥", web_app: { url: process.env.WEB_LINK } },
    ]).resize()
  )
);

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
