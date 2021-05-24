 const temperature = document.getElementById('temperature');
 const sunrise = document.getElementById('sunrise');
 const sunset = document.getElementById('sunset');
 const description = document.getElementById('description');
 const feels_like = document.getElementById('feels_like');
 const tempmax = document.getElementById('tempmax');
 const tempmin = document.getElementById('tempmin');
const city = document.getElementById('city');
const himidity = document.getElementById('himidity');

 const form = document.querySelector('form');
const input = document.querySelector('input')


 let url = 'https://api.openweathermap.org/data/2.5/weather?q=dakar&appid=df8cf110c9fde32073be5d753edac52c';
 let weather = {}
 async function goFetch(url) {
     const data = await fetch(url);
     const response = await data.json();
     weather = {
        city: response.name,
         description: response.weather[0].description,
        sunrise: response.sys.sunrise,
        sunset: response.sys.sunset,
         feels_like: response.main.feels_like,
         temp: response.main.temp,
        temp_max: response.main.temp_max,
         temp_min: response.main.temp_min,
        humidity: response.main.humidity
    }
    processData(weather);
 }

