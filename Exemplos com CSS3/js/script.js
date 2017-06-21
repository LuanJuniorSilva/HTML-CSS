window.onload = function(){
	var funfar = document.getElementById("a1");
	funfar.onmousemove = function (){
	var troc01 = document.getElementById("cor1");
	troc01.style.background = "black";
	troc01.style.color = "red";
	}
	
	var funfar = document.getElementById("a1");
	funfar.onmouseout = function (){
	var ret01 = document.getElementById("cor1");
	ret01.style.background = "white";
	ret01.style.color = "red";
	}
	var funfar = document.getElementById("a2");
	funfar.onmousemove = function (){
	var troc01 = document.getElementById("cor2");
	troc01.style.background = "red";
	troc01.style.color = "black";
	}
	var funfar = document.getElementById("a2");
	funfar.onmouseout = function (){
	var ret01 = document.getElementById("cor2");
	ret01.style.background = "white";
	ret01.style.color = "red";
	}
	var funfar = document.getElementById("a3");
	funfar.onmousemove = function (){
	var troc01 = document.getElementById("cor3");
	troc01.style.background = "blue";
	troc01.style.color = "black";
	}
	var funfar = document.getElementById("a3");
	funfar.onmouseout = function (){
	var ret01 = document.getElementById("cor3");
	ret01.style.background = "white";
	ret01.style.color = "red";
	}
}
