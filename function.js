//menu 
/*
var menu_visible=false

function mostrarOcultarMenu() {
	if(menu_visible==false){
	 document.getElementsById('nav').style.display ='block';
		menu_visible=true;
	}
	else{
	    document.getElementsById('nav').style.display = 'none';
		menu_visible=false;

	}
}

*/
//menu
let menu_visible=false 

function mostrarOcultarMenu() {
	if (menu_visible==false) {
	document.getElementById('nav').style.display = 'block';
	menu_visible=true;
}

else{
	document.getElementById('nav').style.display = 'none';
	menu_visible=false;
}
}


// ocultar el menu cuando se selecciona una opcion
 
  
 for (var i = 0; i < document.querySelectorAll('nav a').length ; i++) {
 	document.querySelectorAll('nav a')[i].onclick = function(){
 		document.getElementById('nav').style.display = 'none'
 		menu_visible=false;
 	}
 }