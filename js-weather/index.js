function clickBtn() {
    //セレクトボックスの選択した値を取得
    const obj = document.getElementById("country");
    const idx = obj.selectedIndex;       //インデックス番号を取得
    const country = obj.options[idx].value;  //value値を取得
    const countryTxt = obj.options[idx].text;  //ラベルを取得

    //データのやり取り
    async function callApi() {
        //JSONデータ取得 日本語で天気名を表示したいのでlang=ja　として日本語表記データを取得
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q= ${country} &units=metric&appid=4b5774e9f3d2a07b84f0f2f88e486224&lang=ja&units=metric`);
        const information = await res.json();

        //天気画像情報取得
        const icon = information.weather[0].icon;

        //DOM操作
        //選択中の都市名
        document.getElementById("city").textContent = countryTxt;//information.name;

        //天候情報
        document.getElementById("weather").textContent = information.weather[0].description;

        //天候画像
        document.getElementById("icon").innerHTML = (`<img src='http://openweathermap.org/img/w/${icon}.png' alt='天気画像' >`);

        //気温表示。小数点第一位四捨五入
        document.getElementById("temperature").textContent = Math.round(information.main.temp);

        //湿度情報
        document.getElementById("humidity").textContent = information.main.humidity;
    }
    callApi();
}

//ページを読み込んだときにロンドンの天気情報を読み込む。
window.addEventListener("load", clickBtn);
