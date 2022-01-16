// function delayMessage() {
// 	setTimeout(booyah(),5000);
// 	// document.getElementById("output").innerHTML = "Waif for it..."
// }

// function booyah() {
// 	document.getElementById("output").innerHTML = "booyah!!";
// }


// timer = null; // stores ID of interval timer
// function delayMsg2() {
// if (timer === null) {
// timer = setInterval(rudy(), 1000);
// } else {
// clearInterval(timer);
// timer = null;
// }
// }
// function rudy() { // called each time the timer goes off
// document.getElementById("output").innerHTML += "Rudy!";
// }



// var myfunc = function(a, x) { return a * x; };  

// var x = myfunc(2, 3);  

// var y = myfunc; 

// function methodx() {
// document.getElementById("output").innerHTML = "x is clicked";
//  alert(x);    //it will alert 6 
// }

// function methody() {

// alert(y(2,3));  //it will alert 6 
// }

function test1() {
    document.getElementById("output").innerHTML = "x is clicked";
    setTimeout(booyah1, 2000);
}

function test2() {
    document.getElementById("output").innerHTML = "y is clicked";
    setTimeout(booyah2(), 2000);
}

function booyah1() {
    alert("BOOYAH!");
}


function booyah2() {

// Usage!
sleep(2000).then(() => {
    // Do something after the sleep!
    alert("BOOYAH!");
});
}

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
