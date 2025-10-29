// we want to wait for the page to. load before executing the script//

//event listener: clicking on a button
document.addEventListener("DOMContentLoaded", function(){
    //the code you want to run when html page is loaded//
    const buttonColor = document.getElementById("button-color");
    //we listened to the click on the button for color
    buttonColor.addEventListener("click", function(){
        //we get a hook on the input color element
        const inputColor = document.getElementById("color-input");
        console.log(inputColor.value);
    });

//button to set updated temperature
const buttonTemperature = document.getElementById("button-temperature");

//we listen to click on the temperature button
buttonTemperature.addEventListener("click", function(){
    let currentTemperature = Math.floor(Math.random()*20);
    console.log(currentTemperature);
//we create link to the span ( we display it)
const temperatureDisplay = document.getElementById ("temperature-display");
temperatureDisplay.innerHTML = currentTemperature;

});

});