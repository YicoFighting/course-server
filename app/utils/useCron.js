const schedule = require("node-schedule");

// Cron 风格
const useCron = (fn) => {
  schedule.scheduleJob("0 10,22 * * *", function () {
    fn();
  });
};

module.exports = { useCron };
