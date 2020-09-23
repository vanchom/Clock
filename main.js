setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
  const currentDate =  new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand,secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();

function realTime (){
  document.getElementById("real-time").innerHTML = ("The time now is")
}


document.getElementById("am").addEventListener("click", myFunction);
document.getElementById("pm").addEventListener("click", myFunctionb);

function myFunction(){
  
  
document.getElementById("title").style.color = "#ef810e";
  document.querySelector("body").style.background = "#e5de44";
  document.querySelector("h2").style.color = "#ef810e";
  document.querySelector("clock").style.background = "ef810e";
}
function myFunctionb(){
  document.querySelector("body").style.background = "#053752";
  document.getElementById("title").style.color = "#ffffff";
  document.querySelector("h2").style.color = "#ffffff";
}

var inicial = prompt("what's your name?");

function greeting(){
  var person =  inicial;
  var personName = person.toLocaleUpperCase();

if(person == ""){
  document.getElementById("title").innerHTML =("Hi, Robot. What's the time?");
  document.getElementById("title").style.color = "red";
  document.body.style.backgroundColor = "#ffffff";
}
if (person != null){
  document.getElementById("title").innerHTML = "Hi, " + personName + ". What's the time?";
}
if(person == "emma"){
  body.style.backgroundColor = "#fe7269";
  document.getElementById("title").style.color = "orange";
}
if (person == "bianca"){
  document.getElementById("title").style.Color = "red";
  document.getElementById("title").style.backgroundColor = "yellow";
}
}
     
greeting();    

