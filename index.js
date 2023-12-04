const API_KEY = `a8032827cb74d34da52d5969f3433d55`;
const date = new Date();
let fullDateAndTime = date.toString();
let tz = fullDateAndTime.split(' ')[5]


console.log(x)

function  fetchbtnClicked(){
    document.getElementById('main').style.display="none"
    document.querySelector('.landing-page ').style.display="block"
    document.querySelector('.last-page ').style.display="block"
    if("geolocation" in navigator){
        alert("Do you  want to share your details ?")
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
           document.getElementById("spanLat").innerText = `${lat}`
           document.getElementById("spanLong").innerText = `${long}`
           let center = document.getElementById("center")
           center.innerHTML = `
       <iframe src="https://maps.google.com/maps?q=${lat}, ${long}&output=embed" width="800" height="300" frameborder="0" style="margin-bottom:30px"
       ></iframe>`
       fetchWeatherData(lat ,long)
        })
    }
}

function fetchWeatherData(lat , long){
    const API_DATA = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
   
 fetch(API_DATA)
 .then((response)=>response.json())
 .then((data)=>{
    finalData(data)
    console.log(data)
    console.log('hi')
 })
 .catch((error)=>console.log(error))
}

function finalData(data){
 document.getElementById('spanLocation').innerText= `${data.name}`;
 document.getElementById('spanSpeed').innerText= `${data.wind.speed} kmph`;
 document.getElementById("spanTZ").innerText= `${tz}`;
 document.getElementById('spanPress').innerText= `${data.main.pressure
 } mbar`;
 document.getElementById('spanWD').innerText= `North East`;
 document.getElementById('spanUV').innerText= 6;
 document.getElementById('spanFL').innerText= `${data.main.feels_like}` ;
  document.getElementById('spanHumidity').innerText= `${data.main.humidity
 }`;
}

