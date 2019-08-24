import moment = require("moment");

export function isMoreThanOrEqualCurrentYear(year){
  return moment().year()<=year;
}
