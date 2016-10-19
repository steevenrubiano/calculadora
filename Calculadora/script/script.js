'use strict';

var btnNum = document.querySelectorAll(".numeros");
for(var i=0; i<btnNum.length; i++){
    btnNum[i].addEventListener("click", clickNumeros, false);
}

var btnSig = document.querySelectorAll(".signos");
for(var i=0; i<btnSig.length; i++){
    btnSig[i].addEventListener("click", clickSignos, false);
}

function clickNumeros(evt){
	var clickNum = parseFloat(evt.target.innerHTML);
   	document.getElementById("display").innerHTML += clickNum;
	console.log(clickNum);
}

function clickSignos(evt){
	var clickSig = evt.target.innerHTML;
   	document.getElementById("display").innerHTML += clickSig;
	console.log(clickSig);
}

var memoria = 0;
function operar (valor, operador){
	if(operador == "+"){
		memoria = memoria + valor;
	}
	if(operador == "-"){
		memoria = memoria - valor;
	}
	if(operador == "x"){
		memoria = memoria * valor;
	}
	if(operador == "/"){
		memoria = memoria / valor;
	}
	document.getElementById("display").innerHTML = memoria;
}