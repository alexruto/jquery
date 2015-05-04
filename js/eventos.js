var iniciaAPP = function()
{
	var Inicio = function()
	{
		alert("Click en el boton Inicio");
		console.log("Click en inicio :P");
	}
	$("#btnInicio").on("click",Inicio);
}
$(document).on("ready",iniciaAPP);

//Inicializar Jquery
// $(document).on("ready",function(){
// 	alert("Pagina lista");
// });