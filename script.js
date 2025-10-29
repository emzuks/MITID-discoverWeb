// we want to wait for the page to. load before executing the script//

//event listener: clicking on a button
document.addEventListener("DOMContentLoaded", function(){
    //create our own AdafruitIO object add your username and key
    const IO = new AdafruitIO("emzuks", "apikey");
    //the code you want to run when html page is loaded//
    const buttonColor = document.getElementById("button-color");
    //we listened to the click on the button for color
    buttonColor.addEventListener("click", function(){
        //we get a hook on the input color element
        const inputColor = document.getElementById("color-input");
        console.log(inputColor.value);
        //change body background color with input value
        document.body.style.backgroundColor = inputColor.value;
        IO.postData("color", inputColor.value);
    });

//button to set updated temperature
const buttonTemperature = document.getElementById("button-temperature");

//we listen to click on the temperature button
buttonTemperature.addEventListener("click", function(){
    let currentTemperature = Math.floor(Math.random()*20);
    console.log(currentTemperature);

    //get data from a feed and do stuffs with data you get//
    IO.getData("temperature", function(data) {
  console.log(data.feed, data.json[0].value);
  
  //we create link to the span ( we display it)
    const temperatureDisplay = document.getElementById ("temperature-display");
    temperatureDisplay.innerHTML = data.json[0].value;
});


});

    //script for the shopping list//

    const buttonShoppingList = document.getElementById ("button-list");

    buttonShoppingList.addEventListener("click", function (){
        const newListItem = document.getElementById("input-list");
        console.log(newListItem.value);
        const containerList = document.getElementById("container-list");
        containerList.innerHTML +='<li> ${newListItem.value} </li>';
    });

});