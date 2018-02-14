$(document).ready(function(){
	$("img")
		.removeClass('img-fluid')
		.addClass('img-circle');

	console.log($(".col-md-12").children("p")); //SELECCIONA LOS ELEMENTOS HIJOS DE UN DIV

	//MODIFICACIONES AL SEGUNDO BLOQUE	
	$(".col-md-6")
		.find('p')
		.html("<u>Sbeyond Code</u>");

	$(".col-md-6 > ul li")
		.eq(1)
		.css("color","red");
	$(".col-md-6 > ul li")
		.eq(0)
		.css("color","yellow");
	$(".col-md-6 > ul li")
		.eq(2)
		.css("color","green");
	$(".col-md-6 > ul li")
		.eq(3)
		.css("color","purple");

	//EJERCICIO: AGREGAR ESTILOS A ELEMENTO DEL HTML CON JQUERY
	$(".col-md-12")
		.find("p").eq(0).addClass('text-yellow').end()
				  .eq(1).addClass('text-purple').end();

	/*
	.attr
	.addClass
	.removeClass
	.css
	.children
	.eq
	.find
	end() 
	*/
	
});

	//7.- EVENTOS
	$("#btn1").on("click",function(){
		console.log("Click");
		$(".modal").show('show');
	});

	$("#img-principal").on("mouseenter", function(){
		$(this).attr("src","img/PICA.jpg");
	});

	$("#img-principal").on("mouseleave", function(){
		$(this).attr("src", "http://placehold.it/400x300");
	});

	$("#btn6").on("click", function(){
		console.log("Click en el boton danger");
	});
	$("#linkUdemy").on("click", function(e){
		e.preventDefault();
		console.log("clicl en el link...");
		
		var link = $(this).attr("href");
		console.log(link);
		window.location = link;
	});

	/*
	.on("click")
	.on("mouseenter")
	.on("mouseleave")
	event.preventDefault
	window.location = 
	.this*/
