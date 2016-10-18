'use strict';
(function(){
var botones = document.getElementsByTagName("button");
for(var i=0; i<botones.length; i++){
    botones[i].addEventListener("click", mostrar, false);
}

function mostrar(){
    alert("estas aqui");
}
})();