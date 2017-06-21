var cargarPagina = function(){
	$("#btn-1").click(function();
}

$(document).ready(cargarPagina);



var origen=document.getElementById('buttonOrigen');
var textOrigen=document.getElementById('origen');

var evolucion=document.getElementById('buttonEvolucion');
var textEvolucion=document.getElementById('evolucion');

origen.addEventListener("dblclick", showO);
origen.addEventListener("click", hiddenO);
 
evolucion.addEventListener("dblclick", showE);
evolucion.addEventListener("click", hiddenE);


function showO() {
  textOrigen.style.visibility = "visible";
}
function hiddenO() {
  textOrigen.style.visibility = "hidden";
}

function showE() {
  textEvolucion.style.visibility = "visible";
}

function hiddenE() {
  textEvolucion.style.visibility = "hidden";
}

var buttonPost=document.getElementById('buttonPost');
buttonPost.addEventListener("click", postImg);


   