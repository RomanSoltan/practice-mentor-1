// ЗАВДАННЯ 4

// Напишіть функцію calculateAge(birthDate), яка приймає
// дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці
// між сьогоднішньою датою і датою народження.

function calculateAge(birthDate) {
  // дізнаємось поточну дату
  const currentDate = new Date();
  // дізнаємось дату народження
  const birth = new Date(birthDate);
  // дізнаємось різницю у роках
  let diffYear = currentDate.getFullYear() - birth.getFullYear();
  // дізнаємось різницю у місяцях
  const diffMonth = currentDate.getMonth() - birth.getMonth();
  // дізнаємось різницю у днях
  const diffDay = currentDate.getDate() - birth.getDate();

  if (diffMonth < 0 || (diffDay < 0 && !diffMonth)) {
    diffYear -= 1;
  }
  return diffYear;
}

console.log(calculateAge('1988-08-13'));
console.log(calculateAge('1988-12-15'));
console.log(calculateAge('1988-11-13'));
