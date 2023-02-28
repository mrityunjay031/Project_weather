const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd995f69db2mshd41ebd5fa392491p1758fajsnc2004c05f1c9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
   cityWeather.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {
        
        
        
        console.log(response)
        temp.innerHTML =response.temp
        temp2.innerHTML =response.temp
        min_temp.innerHTML =response.min_temp
        max_temp.innerHTML =response.max_temp
        //cloud_pct.innerHTML =response.cloud_pct
        feels_like.innerHTML =response.feels_like
        humidity.innerHTML =response.humidity
        humidity2.innerHTML =response.humidity
        wind_speed.innerHTML =response.wind_speed
        wind_speed2.innerHTML =response.wind_speed
        wind_degrees.innerHTML =response.wind_degrees
        sunrise.innerHTML =response.sunrise
        sunset.innerHTML =response.sunset
    })
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

const getCity=(city)=>{
 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
     .then(response => response.json())
     .then((response) => {
         
         
         
         console.log(response)
         temp3.innerHTML =response.temp
         min_temp3.innerHTML =response.min_temp
         max_temp3.innerHTML =response.max_temp
         cloud_pct3.innerHTML =response.cloud_pct
         feels_like3.innerHTML =response.feels_like
         humidity3.innerHTML =response.humidity
         wind_speed3.innerHTML =response.wind_speed
         wind_degrees3.innerHTML =response.wind_degrees
         sunrise3.innerHTML =response.sunrise
         sunset3.innerHTML =response.sunset
     })
     .catch(err => console.error(err));
 }
 getCity("Delhi")

 const getCity2=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then((response) => {
            
            
            
            console.log(response)
            temp4.innerHTML =response.temp
            min_temp4.innerHTML =response.min_temp
            max_temp4.innerHTML =response.max_temp
            cloud_pct4.innerHTML =response.cloud_pct
            feels_like4.innerHTML =response.feels_like
            humidity4.innerHTML =response.humidity
            wind_speed4.innerHTML =response.wind_speed
            wind_degrees4.innerHTML =response.wind_degrees
            sunrise4.innerHTML =response.sunrise
            sunset4.innerHTML =response.sunset
        })
        .catch(err => console.error(err));
    }
    getCity2("Mumbai")

    const getCity3=(city)=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
            .then(response => response.json())
            .then((response) => {
                
                
                
                console.log(response)
                temp5.innerHTML =response.temp
                min_temp5.innerHTML =response.min_temp
                max_temp5.innerHTML =response.max_temp
                cloud_pct5.innerHTML =response.cloud_pct
                feels_like5.innerHTML =response.feels_like
                humidity5.innerHTML =response.humidity
                wind_speed5.innerHTML =response.wind_speed
                wind_degrees5.innerHTML =response.wind_degrees
                sunrise5.innerHTML =response.sunrise
                sunset5.innerHTML =response.sunset
            })
            .catch(err => console.error(err));
        }
        getCity3("Lucknow")

        const getCity4=(city)=>{
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
                .then(response => response.json())
                .then((response) => {
                    
                    
                    
                    console.log(response)
                    temp6.innerHTML =response.temp
                    min_temp6.innerHTML =response.min_temp
                    max_temp6.innerHTML =response.max_temp
                    cloud_pct6.innerHTML =response.cloud_pct
                    feels_like6.innerHTML =response.feels_like
                    humidity6.innerHTML =response.humidity
                    wind_speed6.innerHTML =response.wind_speed
                    wind_degrees6.innerHTML =response.wind_degrees
                    sunrise6.innerHTML =response.sunrise
                    sunset6.innerHTML =response.sunset
                })
                .catch(err => console.error(err));
            }
            getCity4("Kolkata")

            const getCity5=(city)=>{
                fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
                    .then(response => response.json())
                    .then((response) => {
                        
                        
                        
                        console.log(response)
                        temp7.innerHTML =response.temp
                        min_temp7.innerHTML =response.min_temp
                        max_temp7.innerHTML =response.max_temp
                        cloud_pct7.innerHTML =response.cloud_pct
                        feels_like7.innerHTML =response.feels_like
                        humidity7.innerHTML =response.humidity
                        wind_speed7.innerHTML =response.wind_speed
                        wind_degrees7.innerHTML =response.wind_degrees
                        sunrise7.innerHTML =response.sunrise
                        sunset7.innerHTML =response.sunset
                    })
                    .catch(err => console.error(err));
                }
                getCity5("Pune")

                const getCity6=(city)=>{
                    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
                        .then(response => response.json())
                        .then((response) => {
                            
                            
                            
                            console.log(response)
                            temp8.innerHTML =response.temp
                            min_temp8.innerHTML =response.min_temp
                            max_temp8.innerHTML =response.max_temp
                            cloud_pct8.innerHTML =response.cloud_pct
                            feels_like8.innerHTML =response.feels_like
                            humidity8.innerHTML =response.humidity
                            wind_speed8.innerHTML =response.wind_speed
                            wind_degrees8.innerHTML =response.wind_degrees
                            sunrise8.innerHTML =response.sunrise
                            sunset8.innerHTML =response.sunset
                        })
                        .catch(err => console.error(err));
                    }
                    getCity6("Bangalore")