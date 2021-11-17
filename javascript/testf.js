$(document).ready(function(){
	
	var musique=document.querySelector('#musique');
		musique.play();

	$("#texte0").fadeIn(700);
	$("#texte0").fadeOut(300);
	$("#texte1").fadeIn(200);
	$("#texte1").fadeOut(800);
	$("#texte2").fadeIn(800);
	$("#texte2").fadeOut(200);
	$("#texte3").fadeIn(100);
	$("#texte3").fadeOut(900);
	$("#texte4").fadeIn(300);
	$("#texte4").fadeOut(700);
	$("#texte5").fadeIn(600);
	$("#texte5").fadeOut(400);
	setTimeout(Txtfin1, 1000);
 	function Txtfin1(){
		$("#texte6").fadeIn(2000);
		$("#texte6").fadeOut(2000);
	}
	setTimeout(Txtfin2, 5000);
	function Txtfin2(){
	$("#texte7").fadeIn(2000);
	$("#texte7").fadeOut(2000);
	$("#perso").fadeOut(4000);
	}
	setTimeout(Txtfin3,9000);
	function Txtfin3(){
		$("#fin").fadeIn(1000);
	}

});
