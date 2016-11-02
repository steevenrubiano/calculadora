'use strict';
var memoria=0;
var valor=0;
var operacion;

//Add eventos a los numeros y mostrar
$(".numeros").click(mostrarNum);
function mostrarNum(e){
	var num = e.target.value;
	var original = $("#display").html();
	if(!original){
		original = "";
	}
	$("#display").html(original.trim() + "" + num);
	var numCompleto = $("#display").html();
	valor = parseFloat(numCompleto);
}

//Add eventos operadores y operar
$(".signos").click(operarSigno);
function operarSigno(e){
	var operador = e.target.value;

	if(operador == "+"){
		memoria = valor + memoria;
		operacion = "+";
		$("#display").html("");
	}

	if(operador == "-"){
		if(memoria>valor){
			memoria = memoria * (-1);
		}
		memoria = valor - memoria;
		operacion = "-";
		$("#display").html("");
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
		$("#display").html("");
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
		$("#display").html("");
	}

	if(operador == "="){
		if(operacion == "+"){
			$("#display").html(memoria + valor);
			memoria = parseFloat($("#display").html());
			valor = 0;
		}
		if(operacion == "-"){
			$("#display").html(memoria - valor);
			memoria = parseFloat($("#display").html());
			valor = 0;
		}
		if(operacion == "x"){
			$("#display").html(memoria * valor);
			memoria = parseFloat($("#display").html());
			valor = 0;
		}
		if(operacion == "/"){
			$("#display").html(memoria / valor);
			memoria = parseFloat($("#display").html());
			valor = 0;
		}
	}
}

//Add evento para limpiar el display y funcion que lo realiza
$(".limpiar").click(limpiarMemoria);
function limpiarMemoria(){
	$("#display").html("");
	memoria = 0;
	valor = 0;
}

//Add evento para retoceso y funcion que lo realiza
$(".borrar").click(borrarUltimo);
function borrarUltimo(){
	var loQueTengo = $("#display").html();
	var borrado = loQueTengo.substring(0, loQueTengo.length -1);
	$("#display").html(borrado);
}

//Add evento para poner punto y funcion que lo realiza
$(".punto").click(ponerPunto);
function ponerPunto(e){
	var ponPunto = e.target.value;
	//document.getElementById("display").innerHTML += ponPunto;
	var origen = $("#display").html();
	$("#display").html(origen.trim() + "" + ponPunto);
}