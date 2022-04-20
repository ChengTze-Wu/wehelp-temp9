let sun_img=document.getElementById("sunny");
let cloud_img=document.getElementById("cloudy");
let rain_img=document.getElementById("rainy");
let main_info__temp=document.getElementById("temp");
let main_info__status=document.getElementById("status");

function renderMainInfo(data){
    let temperature=data.temp;
    main_info__temp.innerHTML=temperature;

    let chanceOfRain=data.pop;
    let status;
    if (chanceOfRain<=30){
        sun_img.style.display="block";
        status="MOSTLY CLEAR";
        // main_info__status.innerHTML=status;
    }
    else if (chanceOfRain<=70){
        cloud_img.style.display="block";
        status="CLOUDY";
        // main_info__status.innerHTML=status;
    }
    else{
        rain_img.style.display="block";
        status="RAINY";
        // main_info__status.innerHTML=status;
    }
    main_info__status.innerHTML=status;
} 