function renderSecondInfo(speed, humid, pop, uv) {
	let wind = document.querySelector(".second-info__windText");
	let humidText = document.querySelector(".second-info__humidText");
	let rainy = document.querySelector(".second-info__popText");
	let uvRate = document.querySelector(".second-info__uvText");
	let unit = document.querySelector(".second-info__windText__unit");
	console.log(unit);
	wind.innerHTML = speed;
	unit.innerHTML = "km/h";
	humidText.innerHTML = humid + "%";
	rainy.innerHTML = pop + "%";
	uvRate.innerHTML = uv;
}
