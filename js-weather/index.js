function clickBtn() {
    //パラメータ取得
    const country = document.getElementById("country").value;
    console.log(country);
    //document.getElementById("city").textContent = country;

    //データのやり取り
    async function callApi() {
        //JSONデータ取得 日本語で天気名を表示したいのでlang=ja　として日本語表記データを取得
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${country} &units=metric&appid=4b5774e9f3d2a07b84f0f2f88e486224&lang=ja&units=metric`);
        const information = await res.json();
        //console.log(information.main.temp);

        //console.log(information.weather[0].icon);

        //icon情報取得
        const icon = information.weather[0].icon;
        console.log(`http://openweathermap.org/img/w/${icon}.png`);

        //DOM操作
        //国名
        document.getElementById("city").textContent = information.name;
        //document.getElementById("city").insertBefore.innerHTML = (`<img src='http://openweathermap.org/img/w/${icon}.png' alt='天候アイコン' >`);

        //天候情報
        document.getElementById("weather").textContent = information.weather[0].description;

        //天候画像
        document.getElementById("icon").innerHTML = (`<img src='http://openweathermap.org/img/w/${icon}.png' alt='天気画像' >`);
        //document.getElementById("weather").innerHTML = (`src = 'http://openweathermap.org/img/w/${icon}.png'`);

        //気温表示。小数点だけ丸める処理をする
        document.getElementById("temperature").textContent = Math.round(information.main.temp);
        console.log(Math.round(information.main.temp));
        console.log(information.main.temp);
        //湿度情報
        document.getElementById("humidity").textContent = information.main.humidity;
        console.log(information.main.humidity);
    }

    callApi();
}

//ページを読み込んだときにロンドンの天気情報を読み込む。
window.addEventListener("load", clickBtn);

// async function callApi() {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${country} &units=metric&appid=4b5774e9f3d2a07b84f0f2f88e486224&lang=ja&units=metric`);
//     const information = await res.json();
//     console.log(information);
// }

// callApi();
