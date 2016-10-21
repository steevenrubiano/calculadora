'use strict';

var btnNum1 = document.getElementById("boton1");
btnNum1.addEventListener("click", mostrarNum, false);

function mostrarNum(e){
	var num1 = parseInt(e.target.value);
	console.log(num1);
	document.getElementById("display").innerHTML += num1;
	return num1;
}

var sig = document.getElementById("elMas");	
sig.addEventListener("click", mostrarSigno, false);

function mostrarSigno(e){
	var operador = e.target.value;
	console.log(operador);
	document.getElementById("display").innerHTML += operador;
	return operador;
}

function operar(mostrarNum, mostrarSigno){
	console.log(mostrarNum);
	console.log(mostrarSigno);
}