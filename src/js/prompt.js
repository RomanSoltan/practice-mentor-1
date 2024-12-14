// ЗАВДАННЯ 2

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

const promptValue = prompt("Enter value");

function getPrompt(value) {
  // повертаємо проміс з функції
  return new Promise((resolve, reject) => {
    // приведемо дані до числа
    const valueNum = +value;
    // використаємо метод isNaN для перевірки не числа
    if(isNaN(valueNum)) {
      reject("error");
    }
    // перевірка чи парне
    if(!(valueNum % 2)) {
      setTimeout(() => {
        resolve("even");
      }, 1000);
    }
    // перевірка чи непарне
    if(valueNum % 2) {
      setTimeout(() => {
        resolve("odd");
      }, 2000);
    }
  })
} 

// обробляємо роміс
getPrompt(promptValue)
  .then(data => console.log(data))
  .catch(error => console.log(error.message));