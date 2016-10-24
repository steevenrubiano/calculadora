'use strict';
var memoria=0;
var valor=0;

//Add eventos a los numeros y a los signos y funciones 
var btnNums = document.querySelectorAll(".numeros");
	for(var i=0; i<btnNums.length; i++){
		btnNums[i].addEventListener("click", mostrarNum, false);
	}

var btnSignos = document.querySelectorAll(".signos");
	for(var i=0; i<btnSignos.length; i++){
		btnSignos[i].addEventListener("click", operarSigno, false);
	}

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

//Add evento para limpiar el display y funcion que lo realiza
var btnLimpiar = document.querySelectorAll(".limpiar")[0];
	btnLimpiar.addEventListener("click", limpiarMemoria, false);

function limpiarMemoria(){
	document.getElementById("display").innerHTML = "";
	memoria = 0;
	valor = 0;
}

/*var btnBorrar = document.querySelectorAll(".borrar")[0];
	btnBorrar.addEventListener("click", borrarUltimo, false);

function borrarUltimo(){
	alert("entro");	
}*/