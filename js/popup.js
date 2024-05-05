// Показываем попап через 3 секунды
setTimeout(function() {
  document.getElementById('popup').style.display = 'block';
}, 30000);

// Добавляем обработчик закрытия попапа
document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});