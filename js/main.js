;(function(){
	"use strict"
	let sticky = false
	$('#sticky-navigation').removeClass('hidden')
	$('#sticky-navigation').slideUp(0)

	//console.log($(window).height())

	// $(window).scroll(function(){
	// 	console.log("scroll");
	// })

	$(window).scroll(()=>{
		const inBottom = isInBottom()
		//console.log($(window).scrollTop())
		//console.log(isInBottom())

		if(inBottom && !sticky ){
			//Mostrar la navegación sticky
			//console.log('cambiar la navegación')
			sticky = true
			stickNavigation()

		}else if(!inBottom && sticky){
			//Ocultar la navegación sticky
			sticky = false
			//console.log('regresar la navegación')
			unStickNavigation()

		}
	})

	function isInBottom(){
		const $description = $('#descripcion')
		const descriptionHeight = $description.height()

		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 2)
	}

	function stickNavigation() {
		// body...
		$('#descripcion').addClass('fixed').removeClass('absolute')
		$('#navigation').slideUp()
		$('#sticky-navigation').slideDown("fast")
	}


	function unStickNavigation() {
		// body...
		$('#descripcion').removeClass('fixed').addClass('absolute')
		$('#navigation').slideDown("fast")
		$('#sticky-navigation').slideUp("fast")
	}

})()