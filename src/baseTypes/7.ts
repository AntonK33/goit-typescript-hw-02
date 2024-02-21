/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfTheWeek {
 Saturday = 'Saturday',
  Sunday = 'Sunday'
}
let weekend: string = "";
function isWeekend (day) {
  if (day === DaysOfTheWeek.Saturday||DaysOfTheWeek.Sunday) { 
    return true;
} else {
    return false;
}
}

isWeekend(weekend)