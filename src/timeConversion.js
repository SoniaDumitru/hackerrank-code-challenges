// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
//
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

function timeConversion(s) {
let time = s.match(/\d{2}/g);
    if (time[0] === "12") {
        time[0] = "00";
    }
    if (s.indexOf("PM") > -1) {
    time[0] = parseInt(time[0])+12;
    }
    return time.join(":");
}
