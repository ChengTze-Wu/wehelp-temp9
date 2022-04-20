// var
const search__input = document.querySelector(".search__input");
const search__icon = document.querySelector(".search__icon");
const search__renew_icon = document.querySelector(".search__renew_icon");
const navdate__tmr_btn = document.querySelector(".nav-date__tmr_btn");
const navdate__today_btn = document.querySelector(".nav-date__today_btn");

// merge here
async function dataControl() {
  search__input.classList.remove("error");
  // var
  const locationName = search__input.value;
  const result = search__input.value;
  if (result) {
    let indexDate = 1;
    let indexUv = 0;
    const rawData = await getWeatherData(result);
    const data = dataProcess(rawData, indexDate, indexUv);
    if (data) {
      // data : { temp: "str", speed: "str", humid: "str", pop: "str", uv: "str"}
      // render function: main-info, second-info
      console.log(data);
      // locationName
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
    console.log(data);
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
    console.log(data);
  }
});
