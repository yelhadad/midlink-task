const Koa = require("koa");
const log4js = require("log4js");
log4js.configure({
  appenders: {
    mylogger: { type: "file", filename: "/var/midlink-task/app.log" },
  },
  categories: { default: { appenders: ["mylogger"], level: "ALL" } },
});
const logger = log4js.getLogger("app");

const app = new Koa();

const podName = process.env["POD_NAME"];

app.use(async (ctx) => {
  ctx.body = `Hi from ${podName}`;
  logger.info(`logged on pod ${podName}`);
});

app.listen(3000);
logger.info(`${podName} is ready and listening on port: 3000`);
