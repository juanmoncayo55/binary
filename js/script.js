
(function(d){
	const closeMenu = d.querySelector("#closeMenu"),
		closeMenuX = d.querySelector("#closeMenuX"),
		navigation = d.querySelector("#navigation"),
		openMenu = d.querySelector("#openMenu"),
		mediaQuery = window.matchMedia('(min-width: 980px)')

	openMenu.addEventListener('click', function(e){
		e.preventDefault()

		console.log("Listo para cerrar")
		closeMenu.style.setProperty("display", "inline-block");
		navigation.classList.remove('hiden-navigation')
		navigation.style.setProperty("right", "0px");
		/*if (mediaQuery.matches) {
		  closeMenu.style.setProperty("display", "none");
		}*/
	})

	closeMenu.addEventListener("click", function(e){
		e.preventDefault()
		navigation.style.setProperty("right", "-1000px");
		navigation.classList.add('hiden-navigation')
		closeMenu.style.setProperty("display", "none");
		console.log("Me has dado Click");
	})
	closeMenuX.addEventListener("click", function(e){
		e.preventDefault()
		navigation.style.setProperty("right", "-1000px");
		navigation.classList.add('hiden-navigation')
		closeMenu.style.setProperty("display", "none");
	})
})(document)