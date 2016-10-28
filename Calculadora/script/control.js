'use strict';
var memoria=0;
var valor=0;
var operacion;

//Add eventos a los numeros y mostrar
var btnNums = document.querySelectorAll(".numeros");
	for(var i=0; i<btnNums.length; i++){
		btnNums[i].addEventListener("click", mostrarNum, false);
	}

function mostrarNum(e){
	var num = e.target.value;
	var original = document.getElementById("display").innerHTML;
	if(!original){
		original = "";
	}
	document.getElementById("display").innerHTML = original.trim() + "" + num;
	var numCompleto = document.getElementById("display").innerHTML;
	valor = parseFloat(numCompleto);
}

//Add eventos operadores y operar
var btnSignos = document.querySelectorAll(".signos");
	for(var i=0; i<btnSignos.length; i++){
		btnSignos[i].addEventListener("click", operarSigno, false);
	}

function operarSigno(e){
	var operador = e.target.value;

	if(operador == "+"){
		memoria = valor + memoria;
		operacion = "+";
		document.getElementById("display").innerHTML = "";
	}

	if(operador == "-"){
		if(memoria>valor){
			memoria = memoria * (-1);
		}
		memoria = valor - memoria;
		operacion = "-";
		document.getElementById("display").innerHTML = "";
	}

	if(operador == "x"){
		if(memoria==0){
			memoria=1;
		}
		if(valor == 0){
			memoria = memoria * 1;
		}else{
			memoria = valor * memoria;
		}
		operacion = "x";
		document.getElementById("display").innerHTML = "";
	}

	if(operador == "/"){
		if(memoria==0){
			memoria=1;
		}
		if(valor == 0){
			memoria = memoria * 1;
		}else{
			memoria = valor / memoria;
		}
		operacion = "/";
		document.getElementById("display").innerHTML = "";
	}

	if(operador == "="){
		if(operacion == "+"){
			document.getElementById("display").innerHTML = memoria + valor;
			memoria = parseFloat(document.getElementById("display").innerHTML);
			valor = 0;
		}
		if(operacion == "-"){
			document.getElementById("display").innerHTML = memoria - valor;
			memoria = parseFloat(document.getElementById("display").innerHTML);
			valor = 0;
		}
		if(operacion == "x"){
			document.getElementById("display").innerHTML = memoria * valor;
			memoria = parseFloat(document.getElementById("display").innerHTML);
			valor = 0;
		}
		if(operacion == "/"){
			document.getElementById("display").innerHTML = memoria / valor;
			memoria = parseFloat(document.getElementById("display").innerHTML);
			valor = 0;
		}
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

//Add evento para retoceso y funcion que lo realiza
var btnBorrar = document.querySelectorAll(".borrar")[0];
	btnBorrar.addEventListener("click", borrarUltimo, false);

function borrarUltimo(){
	var loQueTengo = document.getElementById("display").innerHTML;
	var borrado = loQueTengo.substring(0, loQueTengo.length -1);
	document.getElementById("display").innerHTML = borrado;
}

var btnPunto = document.querySelectorAll(".punto")[0];
	btnPunto.addEventListener("click", ponerPunto, false);

function ponerPunto(e){
	var ponPunto = e.target.value;
	document.getElementById("display").innerHTML += ponPunto; 
}