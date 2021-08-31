var top=document.getElementById("country")

function weatherApp(){
   let City= document.getElementById("name").value;
   var key='3eec2fc8dd58b7418ed1648e8669ccb1';
   api= `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${key}`;
   
     
fetch(api).then((x)=> x.json()).then(data=>{
   if(data.message){
      document.getElementById("error").innerHTML=data.message
   }
   else{
      document.getElementById("error").innerHTML=""
  time =parseInt(data.main.temp - 273),
  feelslike= parseInt(data.main.feels_like - 273)
  //console.log(data)
 //document.getElementById("clouds").innerHTML= data.weather[0].description,
 document.getElementById("country").innerHTML=data.name +" "+ data.sys.country;
 document.getElementById("clouds").innerHTML= time;
 console.log(data.weather[0].icon,data.clouds.all);
 //console.log(new Date(data.dt*1000-(data.timezone*1000))); // minus 
console.log(new Date(data.dt*1000));
document.getElementById("score").innerHTML=feelslike;
 var iconurl="https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
 document.getElementById("imagee").innerHTML= `<img src=${iconurl} >`; //<img src="https://openweathermap.org/img/wn/${weather.iconId}@4x.png"/>
  document.getElementById("winds").innerHTML= "wind speed:"+data.wind.speed+"mph"
 document.getElementById("realc").innerHTML= "Precipitation:"+data.clouds.all + "%";
 document.getElementById("humidity").innerHTML= "Humidity:"+data.main.humidity + "%";  
 document.getElementById("desc").innerHTML= data.weather[0].description;
 //document.getElementById("score").innerHTML= data.main.temp;// "temp":300.74,
//       "feels_like":303.39,
//       "temp_min":300.74,
//       "temp_max":300.74,
}} )
}


function ctof(temperature){
   return (temperature * 9/5) + 32;
}
 units= "celsius"
function myFun(){
   if(units=="celsius"){
      document.getElementById("clouds").innerHTML= ctof(time)
      document.getElementById("score").innerHTML=ctof(feelslike);
      document.getElementById("units").innerHTML= "°F | °C ";
      units="fahrenheit"
   }
   else {
      document.getElementById("clouds").innerHTML= time;
      document.getElementById("score").innerHTML=feelslike;
      document.getElementById("units").innerHTML= "°C | °F";
      units="celsius"
   }
   
}  
