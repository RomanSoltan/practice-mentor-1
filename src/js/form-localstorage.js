// TASK 1

// Якщо імейл і пароль користувача збігаються, зберігайте дані
// з форми при сабміті у локальне сховище і змінюй кнопку
// login на logout і роби поля введення недоступними для змін.

// При перезавантаженні сторінки, якщо користувач залогінений,
// ми маємо бачити logout-кнопку та недоступні для зміни поля
// з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду
// і видаляє дані користувача з локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

// створимо ключ для localStorage
const LS_KEY = 'user-data';

// отримаємо доступ до елементів
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const button = document.querySelector('.login-form button');
const form = document.querySelector('.login-form');

// додамо слухач події на форму
form.addEventListener('submit', handleSubmit);

// populateData();

function handleSubmit(event) {
  event.preventDefault();
  // // забираємо значення з інпутів
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Робимо логіку Logout
  if (button.textContent === "Logout") {
    event.target.reset();
    localStorage.removeItem(LS_KEY);
    button.textContent = "Login";
    email.removeAttribute('readonly');
    password.removeAttribute('readonly');
    return;
  }

  // зробимо перевірку на порожній рядок
  if (emailValue === '' || passwordValue === '') {
    return alert("Can't be empty fields!");
  }

  // зробимо перевірку
  if (emailValue === USER_DATA.email && passwordValue === USER_DATA.password) {
    // зберігаємо значення в localStorage
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({
        email: emailValue,
        password: passwordValue,
      })
    );

    // змінимо текст кнопки з login на logout
    // зробимо поля введення недоступними для змін
    button.textContent = 'Logout';
    email.setAttribute('readonly', true);
    password.setAttribute('readonly', true);
  } else {
    alert('Invalid Value');
  }
}

// Перевірка чи є щось в localStorage
if (localStorage.getItem(LS_KEY)) {
  // розпарсимо дані з localStorage
  const loginData = JSON.parse(localStorage.getItem(LS_KEY));
  // Додаємо в поля значення з localStorage, якщо їх нема, то
  // підставляємо порожній рядок, щоб не було undefined
  email.value = loginData.email || '';
  password.value = loginData.password || '';
  // змінимо текст кнопки з login на logout
  // зробимо поля введення недоступними для змін
  button.textContent = 'Logout';
  email.setAttribute('readonly', true);
  password.setAttribute('readonly', true);
}

// інший спосіб 
// function populateData() {
//   const loginData = JSON.parse(localStorage.getItem(LS_KEY));
//   if (!loginData) {
//     return;
//   }
//   email.value = loginData.email || "";
//   password.value = loginData.password || "";
//   button.textContent = 'Logout';
//   email.setAttribute("readonly", true);
//   password.setAttribute("readonly", true);
// }



