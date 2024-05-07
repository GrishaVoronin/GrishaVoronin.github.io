function validatePhone(phone) {
    return /^\+?[78][-(]?\d{3}\)??\d{3}?\d{2}?\d{2}$/.test(phone);
}

function validateEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|((([a-z\-0-9]){2,}\.)+[a-z]{2,}))$/i;
}

function validateMessage(message) {
    return /^[а-яА-ЯёЁa-zA-Z\s]+$/.test(message);
}

const toggleButton = document.getElementById('toggle-button');
const feedbackForm = document.getElementById('feedback-form');
const submitButton = feedbackForm.querySelector('button[id="submit"]');

toggleButton.addEventListener('click', () => {
  if (submitButton.classList.contains('button-fail')) {
    submitButton.classList.remove('button-fail');
    submitButton.textContent = 'Отправить';
    submitButton.disabled = false;
  }
  submitButton.classList.add('button-success')
  feedbackForm.classList.toggle('open');
  toggleButton.textContent = feedbackForm.classList.contains('open') ? 'Закрыть форму' : 'Открыть форму';
});

feedbackForm.addEventListener('submit', (e) => {
    event.preventDefault();
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    console.log(message);

    if (validatePhone(phone) && validateEmail(email) && validateMessage(message)) {
        submitButton.textContent = "Отправляем...";
        submitButton.classList.replace('button-success', 'button-loading');
        submitButton.disabled = true;

        sendData({ phone, email, message });
    } else if (!validatePhone(phone)) {
        alert("Проверьте номер телефона.");
    } else if (!validateEmail(email)) {
        alert("Проверьте почтовый адрес.");
    } else if (!validateMessage(message)) {
        alert("Проверьте текст сообщения.");
    }
});

function sendData(data) {
    fetch('http://test.test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        submitButton.textContent = "Успешно отправлено";
        submitButton.classList.replace('button-loading', 'button-success');
    })
    .catch(error => {
        submitButton.textContent = "Ошибка при отправке";
        submitButton.disabled = false;
        alert("Ошибка при отправке: " + error.message);
        submitButton.classList.replace('button-loading', 'button-fail');
        submitButton.disabled = true;
    });
};