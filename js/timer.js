const targetDate = new Date('2028-01-01T00:00:00.000Z');

// Функция обратного отсчета времени
function countdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;
  const years = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `Осталось:<br>
  Лет: ${years}<br>
  Месяцев: ${months}<br>
  Дней: ${days}<br>
  Часов: ${hours}<br>
  Минут: ${minutes}<br>
  Секунд: ${seconds}`;
}

// Обновляем обратный отсчет времени каждую секунду
setInterval(countdown, 1000);