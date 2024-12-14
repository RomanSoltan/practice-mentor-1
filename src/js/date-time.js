//   ЗАВДАННЯ 3

// Додай відображення дати і часу в реальному часі

const setDate = document.querySelector('.date span');

function update() {
  // Запишемо у спан час у реальному часі
  setDate.textContent = new Date().toLocaleString();
}

update();

// будемо викликати функцію кожну секунду
setInterval(update, 1000);
