// var
const search__input = document.querySelector(".search__input");
const search__icon = document.querySelector(".search__icon");
const search__renew_icon = document.querySelector(".search__renew_icon");

// merge here
async function dataControl() {
    search__input.classList.remove("error");
    // var
    const locationName = search__input.value;
    const result = search__input.value;
    if (result) {
        let indexDate = 0;
        const rawData = await getWeatherData(result);
        const data = dataProcess(rawData, indexDate);
        if (data) {
            search__input.value = "";
            // data : { temp: "str", speed: "str", humid: "str", pop: "str", uv: "str"}
            // render function: main-info, second-info
            console.log(data);
            // 測試1
            // 測試2
            // locationName
            // nav-date function
            // addEventListener("click", () => {
            //     indexDate = 1;
            //     const data = dataProcess(rawData, indexDate);
            // });
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
