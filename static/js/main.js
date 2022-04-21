// var
const search__input = document.querySelector(".search__input");
const search__icon = document.querySelector(".search__icon");
const search__renew_icon = document.querySelector(".search__renew_icon");
const navdate__tmr_btn = document.querySelector(".nav-date__tmr_btn");
const navdate__today_btn = document.querySelector(".nav-date__today_btn");

// merge here
async function dataControl() {
    search__input.classList.remove("error");
    const result = search__input.value;
    if (result) {
        let indexDate = 1;
        let indexUv = 0;
        const rawData = await getWeatherData(result);
        const data = dataProcess(rawData, indexDate, indexUv);
        if (data) {
            // render
            //  { temp: temp, speed: speed, humid: humid, pop: pop, uv: uv }
            // main-info
            renderMainInfo(data);
            // second-info
            renderSecondInfo(data.speed, data.humid, data.pop, data.uv);
        } else {
            search__input.classList.add("error");
        }
    } else {
        search__input.classList.add("error");
    }
}

// search__icon
search__icon.addEventListener("click", dataControl);
search__input.addEventListener(
    "keydown",
    (e) => {
        if (e.keyCode === 13) {
            dataControl();
        }
    },
    false
);
// nav-date
//今日天氣
navdate__today_btn.addEventListener("click", async () => {
    const result = search__input.value;
    if (result) {
        const rawData = await getWeatherData(result);
        indexDate = 1;
        indexUv = 0;
        const data = dataProcess(rawData, indexDate, indexUv);
        // main-info
        renderMainInfo(data);
        // second-info
        renderSecondInfo(data.speed, data.humid, data.pop, data.uv);
    }
});
//明日天氣
navdate__tmr_btn.addEventListener("click", async () => {
    const result = search__input.value;
    if (result) {
        const rawData = await getWeatherData(result);
        indexDate = 3;
        indexUv = 1;
        const data = dataProcess(rawData, indexDate, indexUv);
        // main-info
        renderMainInfo(data);
        // second-info
        renderSecondInfo(data.speed, data.humid, data.pop, data.uv);
    }
});

// initload
window.addEventListener("load", async () => {
    search__input.value = "臺北市";
    const rawData = await getWeatherData("台北市");
    indexDate = 1;
    indexUv = 0;
    const data = dataProcess(rawData, indexDate, indexUv);
    // main-info
    renderMainInfo(data);
    // second-info
    renderSecondInfo(data.speed, data.humid, data.pop, data.uv);
});
