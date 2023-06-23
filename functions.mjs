function handlesubmit(event) {
  event.preventDefault();
  let data = document.querySelector("#input");
  document.querySelector("#celcius").innerHTML = data.value;
  let img = document.querySelector(".weatherIcon img").src;
  console.log('first', img)
  
  let weather = data.value;
  if (weather.length == 0) {
    document.querySelector("#celcius").innerHTML = "0";
    document.querySelector(".weatherCondition").innerHTML = "Enter Temp";
    console.log("hot weather");
  } else if (weather > 100) {
    document.querySelector("#celcius").innerHTML = "0";
    document.querySelector(".weatherCondition").innerHTML = "Enter Valid Temp";
    document.querySelector(".weatherIcon img").src = './images/959873.png';
  } else if (weather < -100) {
    document.querySelector("#celcius").innerHTML = "0";
    document.querySelector(".weatherCondition").innerHTML = "Enter Valid Temp";
    document.querySelector(".weatherIcon img").src = './images/959873.png';
  } else if (weather > 30) {
    document.querySelector(".weatherCondition").innerHTML = "Too hot";
    document.querySelector(".weatherIcon img").src = './images/day.svg';
  } else if (weather > 20) {
    document.querySelector(".weatherCondition").innerHTML = "Moderate";
    document.querySelector(".weatherIcon img").src = './images/cloudy-day-1.svg';
  } else if (weather > 0) {
    document.querySelector(".weatherCondition").innerHTML = "Too cold";
    document.querySelector(".weatherIcon img").src = './images/snowy-6.svg';
  }
}

document.addEventListener("submit", handlesubmit);
