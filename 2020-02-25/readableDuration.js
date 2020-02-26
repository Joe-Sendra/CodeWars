// https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

/*
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.


*/
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS*60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS*24;
const YEAR_IN_SECONDS = DAY_IN_SECONDS*365;

function formatDuration (seconds) {

  let remainingSeconds = 0;
  let years = getYears(seconds);
  remainingSeconds = seconds - (years * YEAR_IN_SECONDS);
  let days = getDays(remainingSeconds);
  remainingSeconds = remainingSeconds - (days * DAY_IN_SECONDS);
  let hours = getHours(remainingSeconds);
  remainingSeconds = remainingSeconds - (hours * HOUR_IN_SECONDS);
  let minutes = getMinutes(remainingSeconds);
  remainingSeconds = remainingSeconds - (minutes * MINUTE_IN_SECONDS);
  
  // Build readable string
  let strDuration = ''
  if (years > 0){
    years === 1 ? strDuration += '1 year' : strDuration += years + ' years';
  }
  if (days > 0){
    if (strDuration === ''){
      days === 1 ? strDuration += '1 day' : strDuration += days + ' days';
    } else {
      days === 1 ? strDuration += ', 1 day' : strDuration += ', ' + days + ' days';
    }
  }
  if (hours > 0){
    if (strDuration === ''){
      hours === 1 ? strDuration += '1 hour' : strDuration += hours + ' hours';    
    } else {
      hours === 1 ? strDuration += ', 1 hour' : strDuration += ', ' + hours + ' hours';
    }
  }
  if (minutes > 0){
    if (strDuration === ''){
      minutes === 1 ? strDuration += '1 minute' : strDuration += minutes + ' minutes';
    } else {
      minutes === 1 ? strDuration += ', 1 minute' : (remainingSeconds) ? strDuration += ', ' + minutes + ' minutes' : strDuration += ' and ' + minutes + ' minutes';
    }
  }
  if (remainingSeconds > 0){
    if (strDuration === ''){
      remainingSeconds === 1 ? strDuration += '1 second' : strDuration += remainingSeconds + ' seconds';
    } else {
      remainingSeconds === 1 ? strDuration += ' and 1 second' : strDuration += ' and ' + remainingSeconds + ' seconds';
    }
  }
  if (remainingSeconds === 0 && strDuration === ''){
    strDuration = 'now';
  }
  console.log(years, days, hours, minutes, remainingSeconds);
  return strDuration;

}

function getYears(seconds){
  return Math.floor(seconds / YEAR_IN_SECONDS);
}
function getDays(seconds){
  return Math.floor(seconds / DAY_IN_SECONDS);
}
function getHours(seconds){
  return Math.floor(seconds / HOUR_IN_SECONDS);
}
function getMinutes(seconds){
  return Math.floor(seconds / MINUTE_IN_SECONDS);
}
