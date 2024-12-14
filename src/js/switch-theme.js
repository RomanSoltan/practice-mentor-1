// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

// отримаємо доступ
const input = document.querySelector("#checkbox");
const body = document.querySelector("body");

const STYLE_PAGE = "theme";
// повісимо слухача події
input.addEventListener('change', switchStyle);

function switchStyle(event) {
  if(event.target.checked) {
    body.classList.add("dark");
    localStorage.setItem(STYLE_PAGE, "dark");
    body.classList.remove("light");
  } else {
    body.classList.add("light");
    localStorage.setItem(STYLE_PAGE, "light");
    body.classList.remove("dark");
  }
} 

// Збережемо поведінку під час перезавантаження сторінки
if (localStorage.getItem(STYLE_PAGE) === "dark") {
  body.classList.add("dark");
  body.classList.remove("light");
  input.checked = true;
}