const toggleButton = document.getElementById('toggle-button');
const feedbackForm = document.getElementById('feedback-form');

toggleButton.addEventListener('click', () => {
  feedbackForm.classList.toggle('open');
  toggleButton.textContent = feedbackForm.classList.contains('open') ? 'Закрыть форму' : 'Открыть форму';
});

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Отправка формы
  console.log('Форма отправлена!');
  feedbackForm.classList.remove('open');
  toggleButton.textContent = 'Открыть форму';
});