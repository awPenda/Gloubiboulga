$(document).ready(function(){
	
	

	localStorage.setItem("fromage","");
	localStorage.setItem("anneau","");
	
	
	$("#jeu").on("click",fsuitep);
	function fsuitep(){
		window.location="html/projet.html";
	}
	$("#credits").on("click",fsuitec);
	function fsuitec(){
		window.location="html/credits.html";
	}
	$("#regles").on("click",fsuiter);
	function fsuiter(){
		window.location="html/regles.html";
	}

});