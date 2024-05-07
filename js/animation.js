const rainButton = document.querySelector(".rain-button");
const rain = document.querySelector(".rain");

rainButton.addEventListener('click', function (e) {
    e.preventDefault();
    const rain = document.querySelector(".rain");
    rain.classList.add("rain_open");
    rain.classList.add("rain_animation");
    rainButton.textContent = 'Выключить дождь';
})

rain.addEventListener('click', function () {
    if (rain.classList.contains("rain_open")) {
        rain.classList.remove("rain_open");
        rainButton.textContent = 'Включить дождь';
    }
})