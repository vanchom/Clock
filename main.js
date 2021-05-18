setInterval(setClock,1000)

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
}
function setRotation(element, rotationRatio)
{
    element.style.setProperty("--rotation", rotationRatio * 360)
}
setClock();

var noon = 12;
var showCurrentTime =  function()
{
var clock = document.getElementById("digital-clock")
var currentTime = new Date();
var hours =  currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds =  currentTime.getSeconds();

var meridian = "AM";
if(hours >= noon)
{
    meridian = "PM";
}
if(hours > noon)
{
    hours = hours - 12;
}

if(minutes < 10)
{
    minutes = "0"+ minutes;
}
if(seconds < 10)
{
    seconds = "0" + seconds;
}

var clockTime = hours +" : " + minutes + " : " + seconds +" " + meridian;
clock.innerText = clockTime;
}

showCurrentTime();

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);

function Digital()
{
    document.getElementById("analog-clock").style.visibility = "hidden";
    document.getElementById("digital-clock").style.visibility = "visible";
}
function Analog()
{
    document.getElementById("digital-clock").style.visibility = "hidden";
    document.getElementById("analog-clock").style.visibility = "visible";
}