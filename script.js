const apiKey = 'APi_KEY';

function getWeather(){
    const city = document.getElementById('cityInput').value
    if(!city) return alert('Please type Any City');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(apiUrl)
        .then(response=>response.json())
        .then((data)=>displayWeather(data))
        .catch(error=>alert('city Not found'))
}

function displayWeather(data){
    document.getElementById('cityName').textContent = data.name
    document.getElementById('weatherCondition').textContent=`Condition: ${data.weather[0].description}`
    document.getElementById('temp').textContent= `Temperature: ${data.main.temp}°C`
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`
    const timestamp = data.dt;
    const timezoneOffset = data.timezone;

    
    const localTime = new Date((timestamp + timezoneOffset) * 1000);


    const hours = localTime.getUTCHours().toString().padStart(2, '0'); 
    const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');
    const day = localTime.toLocaleString('default', { weekday: 'long' });
    const fullDate = localTime.toLocaleDateString();


    document.getElementById('time').textContent = `Local Time: ${hours}:${minutes}`;
    document.getElementById('date').textContent = `Day: ${day}, Date: ${fullDate}`;
}


