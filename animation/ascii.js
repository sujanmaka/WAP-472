"use strict";
import { ANIMATIONS } from './animation.js';

//for clearing interval, myinterval is defined as global
var myinterval;
//by default, stop button is disabled at beginning
document.getElementById("stop").disabled = true;
document.getElementById("start").disabled = true;

let speed = 250;

//function to perform start action
export function start(val) {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;

    let count = 0;
    if (val) {
        speed = val;
    }


    let selectedItem = document.getElementById('item');
    let item = selectedItem.options[selectedItem.selectedIndex].value;

    //split the content into contents array
    let contents;
    if (item == "CUSTOM") {
        contents = document.getElementById("screen").value.split("=====\n");
    } else if (item == "BLANK") {
        contents = [];
    } else {
        contents = ANIMATIONS[item].split("=====\n");
    }

    let selectedSize = document.getElementById('itemSize');
    let size = selectedSize.options[selectedSize.selectedIndex].value;
    document.getElementById("screen").style.fontSize = size;

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
    if (myArray.length > 0) {
        document.getElementById("screen").innerHTML = myArray[count];
    }
}


export function checkboxAction() {
    clearInterval(myinterval);
    if (document.getElementById("speed").checked) {
        speed = 50;
    } else {
        speed = 250;
    }
    start(speed);
}


export function itemSelectAction() {
    let selectedItem = document.getElementById('item');
    let item = selectedItem.options[selectedItem.selectedIndex].value;
    if (item == "BLANK") {
        document.getElementById("stop").disabled = true;
        document.getElementById("start").disabled = true;
    } else {
        document.getElementById("start").disabled = false;
    }
}