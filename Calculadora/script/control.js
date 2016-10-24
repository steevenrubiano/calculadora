'use strict';
//var calculadora = new Calculadora();
var memoria=0;

//Add eventos a los numeros
var btnNums = document.querySelectorAll(".numeros");
for(var i=0; i<btnNums.length; i++){
	btnNums[i].addEventListener("click", mostrarNum, false);
}

//Add eventos a los signos
var btnSignos = document.querySelectorAll(".signos");
for(var i=0; i<btnSignos.length; i++){
	btnSignos[i].addEventListener("click", mostrarSigno, false);
}


//Funciones
function mostrarNum(e){
	var num = e.target.value;

	document.getElementById("display").innerHTML = num;
	console.log(num);
}

function mostrarSigno(e){
	var operador = e.target.value;

	document.getElementById("display").innerHTML = operador;
	console.log(operador);
}

	/*if(operador == "+"){
		memoria = memoria + valor;
		document.getElementById("display").innerHTML = memoria;
	}

	if(operador == "="){
		document.getElementById("display").innerHTML = memoria + valor;
	}*/