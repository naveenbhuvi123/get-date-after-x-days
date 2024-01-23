const { addDays } = require("date-fns");

function getDateAfterXDays(days) {
  let date = addDays(new Date(2020, 7, 22), days);
  console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
}
module.exports = getDateAfterXDays;
