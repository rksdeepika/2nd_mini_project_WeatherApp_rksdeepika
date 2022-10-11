const ApiKeyWeatherApp = `a2bde81ffa2c62db101e6761f047e681`;

const linkforweather = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=a2bde81ffa2c62db101e6761f047e681'

const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

var input = document.getElementById("searchin");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("searchicon").click();
  }
});
function returnWeather(){
    const city = document.getElementById("searchin").value; 
    console.log(city);
    const url = `${apiBase}?q=${city}&appid=${ApiKeyWeatherApp}&units=metric`;
    fetch(url).then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
       
        return response.json();
      }).then((data) => showWeather(data));
      
}



function showWeather(data){

    const name = data.name;
    const temp = data.main.temp;
    const  humidity =  data.main.humidity;
    const speed = data.wind.speed;
    const { icon, description } = data.weather[0];
    console.log(data.name);
    console.log(JSON.stringify(data));

    document.querySelector(".country").innerText = "Weather in " + name ;
    document.querySelector(".humidity").innerText = "Humidity: " + humidity +"%";
    document.querySelector(".windspeed").innerText = "Windspeed: " + speed +" km/hr";
    document.querySelector(".degree").innerText = temp + " °C";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;



}


