'use strict';
var memoria=0;
var valor=0;

//Add eventos a los numeros
var btnNums = document.querySelectorAll(".numeros");
	for(var i=0; i<btnNums.length; i++){
		btnNums[i].addEventListener("click", mostrarNum, false);
	}

//Add eventos a los signos
var btnSignos = document.querySelectorAll(".signos");
	for(var i=0; i<btnSignos.length; i++){
		btnSignos[i].addEventListener("click", operarSigno, false);
	}

//Funciones
function mostrarNum(e){
	var num = e.target.value;

	document.getElementById("display").innerHTML = num;
	console.log(num);
	valor = parseInt(num);
}

function operarSigno(e){
	var operador = e.target.value;
	console.log(operador);
	
	if(operador == "+"){
		memoria = memoria + valor;
		document.getElementById("display").innerHTML = memoria;
	}

	if(operador == "="){
		document.getElementById("display").innerHTML = memoria + valor;
	}
}