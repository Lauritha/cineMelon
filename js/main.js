/*$(document).ready(function(){
	$( "#categorias" ).click(function() {
  		$('#Container').mixItUp();
});
})

function categoriaFamiliar() {
	if()
}*/



$(function(){
  $('#Container').mixItUp();
});

window.onload = function () {
	var atras = document.getElementById('irAtras');
	atras.addEventListener("click", irAtras);
	function irAtras() { this.style.color = 'red'; window.history.back();
}
}

