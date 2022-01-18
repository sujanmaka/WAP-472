"use strict";
import { ANIMATIONS } from './animation.js';

//for clearing interval, myinterval is defined as global
var myinterval;
//by default, stop button is disabled at beginning
document.getElementById("stop").disabled = true;

//function to perform start action
export function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;

    let count = 0;
    let speed = 250;
    if (document.getElementById("speed").checked) {
        speed = 50;
    }


    let selectedItem = document.getElementById('item');
    let item = selectedItem.options[selectedItem.selectedIndex].value;

    //split the content into contents array
    const contents = ANIMATIONS[item].split("=====\n");

    let selectedSize = document.getElementById('itemSize');
    let size = selectedSize.options[selectedSize.selectedIndex].value;
    document.getElementById("screen").style.fontSize = size;

    //animation logic for CUSTOM
    // if (item == "CUSTOM") {
    //     let content = document.getElementById("screen").value;
    //     contents = [content.toUpperCase(), content.toLowerCase(), content.toUpperCase()];
    // }
    // console.log(contents);

    //calls interval function on particular time 
    myinterval = setInterval(function() {
        if (count < contents.length - 1) {
            count++;
        } else {
            count = 0;
        }
        displayHello(contents, count);
    }, speed);
};

//perform stop action
export function stop() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;

    clearInterval(myinterval);
    var selectedItem = document.getElementById('item');
    var item = selectedItem.options[selectedItem.selectedIndex].value;
    document.getElementById("screen").innerHTML = ANIMATIONS[item];
}

//repetitive action to display the content of array as animation
function displayHello(myArray, count) {
    document.getElementById("screen").innerHTML = myArray[count];
}