$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('contenedor-categoria[category="all"]').addClass('seleccionada');

	// FILTRANDO PRODUCTOS  ============================================

	$('.contenedor-categoria').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.contenedor-categoria').removeClass('seleccionada');
		$(this).addClass('seleccionada');

		// OCULTANDO PRODUCTOS =========================
		$('.item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.item[category="'+catProduct+'"]').show();
			$('.item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.contenedor-categoria[category="all"]').click(function(){
		function showAll(){
			$('.item').show();
			$('.item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});