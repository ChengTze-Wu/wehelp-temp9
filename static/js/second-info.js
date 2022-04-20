function renderSecondInfo(speed, humid, pop, uv) {
    let wind = document.querySelector(".second-info__windText");
    let humidText = document.querySelector(".second-info__humidText");
    let rainy = document.querySelector(".second-info__popText");
    let uvRate = document.querySelector(".second-info__uvText");

    wind.innerHTML = speed + " km/h";
    humidText.innerHTML = humid + "%";
    rainy.innerHTML = pop + "%";
    uvRate.innerHTML = uv;
}
