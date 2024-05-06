// Проверяем, было ли попап закрыто ранее
if (!localStorage.getItem("popupClosed")) {
  setTimeout(function() {
    // Отображение попапа через 30 секунд
    document.getElementById("popup").style.display = "block";
  }, 30000);
}

// Обработка закрытия попапа
document.getElementById("close-popup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
  localStorage.setItem("popupClosed", true);
});