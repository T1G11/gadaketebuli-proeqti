let currentCity = localStorage.getItem('currentCity') ? localStorage.getItem('currentCity') : 'London';




const draw = (cityName, temperature , wind , humidity , description ) => {
    document.getElementById('city').innerHTML = cityName;
    document.getElementById('description').innerHTML = description;
    document.getElementById('temperature').innerHTML = temperature;
    document.getElementById('wind').innerHTML = wind;
    document.getElementById('humidity').innerHTML = humidity;
    document.getElementById('time').innerHTML = moment().format("HH:mm A");

    document.getElementById('date').innerHTML = moment().format("dddd,MMM Do, YYYY");

}



const fetchCityWeather = (cityName) => {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=e3f7e600451efbced453a95a6aab5ee4&units=metric', {
        method: 'GET'
    })
        .then(function (reponseText) {
            return reponseText.json();
        })
        .then(function (reponseData) {
            console.log(reponseData);

            const cityName = reponseData.name;
            const temperature = reponseData.main.temp;

            const wind = reponseData.wind.speed;
            const humidity = reponseData.main.humidity;
            const desciption = reponseData.weather[0].main;

            draw(cityName, temperature , wind , humidity , desciption);

            localStorage.setItem('currentCity', cityName);
        })
        .catch(function (error) {
            console.log(error);
        })
}

fetchCityWeather(currentCity);



document.getElementById('search').addEventListener('click',function(){
    let city = document.getElementById('searchInput').value;
    fetchCityWeather(city);
});




