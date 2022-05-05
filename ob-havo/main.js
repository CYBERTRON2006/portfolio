const api = {
    key: 'a5385f2440d4000b0d7260c35140454c',
    baseurl: 'https://api.openweathermap.org/data/2.5/',
}

const search = document.querySelector('.search');

search.addEventListener('keypress', setQuery);

function setQuery(e){
    if(e.keyCode == 13){
        getResult(search.value)
    }
}

function getResult(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
        return weather.json();
    })
    .then(displayResults)
}

function displayResults(weather){
    console.log(weather);

    const city = document.querySelector('.city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();

    let date = document.querySelector('.date');
    date.innerHTML = dateBuilder(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.ceil(weather.main.temp)}<span>°C</span>`

    let weatherE1 = document.querySelector('.weather');
    weatherE1.innerHTML = `${weather.weather[0].main}`

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.ceil(weather.main.temp_min)}°C  / ${Math.ceil(weather.main.temp_max)}°C  `
}

function dateBuilder(s){
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thuersday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    let day = days[s.getDay()];
    let date = s.getDate();
    let month = months[s.getMonth()];
    let year = s.getFullYear();

    return `${day} ${date} ${month} ${year}`
}



setInterval(() => {
    let time = new Date();
    let vaqt = document.querySelector('.vaqt');

    vaqt.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} `
}, 1000);