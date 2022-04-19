async function getWeatherData(result) {
    if (result.includes("台")) {
        result = result.replace("台", "臺");
    }
    const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-5DD98EFD-C8BE-4EE3-9BBE-E90E3769BDDC&format=JSON&locationName=${result}`;
    const resp = await fetch(url);
    const content = await resp.json();
    return content;
}

function dataProcess(rawData, indexDate) {
    let temp;
    let speed;
    let humid;
    let pop;
    let uv;
    let result;
    const data = rawData["records"]["locations"][0]["location"][0];
    if (data) {
        const weatherData = data.weatherElement;
        temp = weatherData[1]["time"][indexDate]["elementValue"][0]["value"];
        speed = weatherData[4]["time"][indexDate]["elementValue"][0]["value"];
        humid = weatherData[2]["time"][indexDate]["elementValue"][0]["value"];
        pop = weatherData[0]["time"][indexDate]["elementValue"][0]["value"];
        uv = weatherData[9]["time"][indexDate]["elementValue"][0]["value"];
        result = { temp: temp, speed: speed, humid: humid, pop: pop, uv: uv };
    } else {
        result = null;
    }
    return result;
}

// 經緯度
// function getUserPosition() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => resolve(position),
//             (error) => reject(error)
//         );
//     });
// }
// async function start() {
//     const position = await getUserPosition();
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     console.log(lat, lon);
// }
