function buttonAction() {
	setInterval(increaseFontSize, 500);
}

function checkboxAction() {
	alert("checkbox action")
	if (document.getElementById("bling").checked) {
		console.log(document.getElementById("bling").checked);
		document.getElementById("textarea").style.fontWeight = "bold";
		document.getElementById("textarea").style.color = "green";
		document.getElementById("textarea").style.textDecoration = "underline";
		document.body.style.backgroundImage = "url(https://i.ebayimg.com/images/g/DVsAAOSwUaZc9F1k/s-l1600.jpg)";
	} else {
		document.getElementById("textarea").style.fontWeight = "normal";
		document.body.style.backgroundImage = "none";
	}

}

function increaseFontSize() {
	console.log(document.getElementById("textarea").style.fontSize);
	document.getElementById("textarea").style.fontSize =
	parseInt(document.getElementById("textarea").style.fontSize) + 2 + "pt";
}


function pigIt(){
  let str = document.getElementById("textarea").value;
  console.log(str);
  let strArr = str.split(' ');
  let pigLatin = [];

  for(let word of strArr){
    if((/([a-zA-Z])/).test(word)){
      pigLatin.push(word.substring(1) + word[0] + "ay");
    }else{
      pigLatin.push(word);
    }
  }
  let result = pigLatin.join(" ");
  console.log(result);
  document.getElementById("textarea").value = pigLatin.join(" ");

}	

function changeToMalkovitch() {
	  let str = document.getElementById("textarea").value;
	  let strArr = str.split(" ");
	  for (let i = 0;  i < strArr.length; i++) {
	  	if (strArr[i].length >= 5) {
	  		strArr[i] = "Malkovitch";
	  	}
	  }
	  document.getElementById("textarea").value = strArr.toString().replaceAll(",", " ");
}