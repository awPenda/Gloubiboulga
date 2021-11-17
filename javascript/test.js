$(document).ready(function(){

		var musique = document.querySelector('#pokemon');
		musique.play();
	//variable opacité
		var opa=1;
	//variables pour le déplacement et la position du personnage;
		var positionX=0, positionY=750;
		var n=1,positionXG;
	//variables pour la position du personnage et des objets
		var p,p1,ptp1,ptp1y,ptp2,ptp2y,pc,pcy;

	//tableau pour les collisions etc
		var ligne1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne4=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne5=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne6=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var	ligne7=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne8=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne9=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne10=[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
		var ligne11=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
		var ligne12=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
		var ligne13=[0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
		var ligne14=[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0];
		var ligne15=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne16=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5];
		var ligne17=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5];
		var ligne18=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5];
		var ligne19=[0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,5];
		var ligne20=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		var tab=[ligne1,ligne2,ligne3,ligne4,ligne5,ligne6,ligne7,ligne8,ligne9,ligne10,ligne11,ligne12,ligne13,ligne14,ligne15,ligne16,ligne17,ligne18,ligne19,ligne20];


	//pour animation du perso
		var perso=new JSMovieclip($("#perso"),{
			framerate:9,
			direction:"h",
			frames_number:5,
			width:100
		});
		perso.play(true);

	//gestion du clavier
		$(document).on("keydown",fonction1); //détecte siil y a une touche appuyée

		function fonction1(e){
			if(e.keyCode==37){
				if(tab[positionY/50][(positionX/50)-1]==0){
					gauche();
				}
			}
			if(e.keyCode==39){
				if(tab[positionY/50][(positionX/50)+2]==0){
					droite();
				}
				if(tab[positionY/50][(positionX/50)+2]==5){
					window.location="../html/page1.html";
				}
			}
			//si on appuie sur e, on regarde la position du personnage, et si elle corresponds a un teleporteur, ou a un objet, le personnage peut l'utiliser
				if(e.keyCode==69){
					//definition des variables
						//position du personnage
							p=parseInt($("#perso").css("left"));
							p1=parseInt($("#perso").css("top"));
						//position des tp
							ptp1=parseInt($("#tp1").css("left"));
							ptp1y=parseInt($("#tp1").css("top"));
							ptp2=parseInt($("#tp2").css("left"));
							ptp2y=parseInt($("#tp2").css("top"));
						//position du coffre
							pc=parseInt($("#coffre").css("left"));
							pcy=parseInt($("#coffre").css("top"));
					//pour le teleporteur 1
						if (p+50<=ptp1) {
							if((p+50>=ptp1)&&(p<=ptp1)&&(p1==ptp1y)){
								ftp1();
							}
						}
						if(p-50<=ptp1) {
							if((p-50<=ptp1)&&(p>=ptp1)&&(p1==ptp1y)){
								ftp1();
							}
						}
					//pour le teleporteur 2
						if (p+50<=ptp2) {
							if((p+50>=ptp2)&&(p<=ptp2)&&(p1==ptp2y)){
								ftp2();
							}
						}
						if(p-50<=ptp2) {
							if((p-50<=ptp2)&&(p>=ptp2)&&(p1==ptp2y)){
								ftp2();
							}
						}
					//pour le coffre
						if(p-50<=pc) {
							if((p-50<=pc)&&(p>=pc)&&(p1+150==pcy)){
								deplacer();
							}
						}
				}


		}

	//fonctions pour le déplacement du personnage
		function gauche (){
			positionX=positionX-50;
			$("#perso").css("transform","rotateY(180deg").css({left:positionX+"px"});
		};
		function droite (){
			positionX=positionX+50;
			$("#perso").css("transform","rotateY(0deg)").css({left:positionX+"px"});
			disparition();
		};


	//animation pour pikachu
		var pikachu=new JSMovieclip($("#pikachu"),{
			framerate:5,
				direction:"h",
					frames_number:5,
						width:50
		});
		pikachu.play(true);
		var temps=setInterval(animationG,100);
		function animationG (){
			positionXG=$("#pikachu").css("left");

			if((n==-1)&&(positionXG>="350px")){
				$("#pikachu").animate({left:"+=-10px"},50).css("transform","rotateY(180deg");
			}
			if((n==1)&&(positionXG<="500px")){
				$("#pikachu").animate({left:"+=10px"},50).css("transform","rotateY(0deg");
			}
			if(positionXG=="500px"){
				n=-1;
			}
			if(positionXG=="350px"){
				n=1;
			}

		}

	// envoyer objet dans inventaire
		function deplacer (){
			alert("Bravo ! Tu as trouvé ton précieux. Désormais il t'appartient. ");
				$("#anneau").css("z-index",1).animate({left:"1115px"},500).animate({top:"125px"},500);
					remplissageStockageanneau();
			function remplissageStockageanneau(){
				localStorage.setItem("anneau","vrai");
			}

		};

	//fonctions attribuée aux téléporteurs
		function ftp1 (){
			$("#perso").css({left:"650px"}).css({top:"450px"});
				positionX=650;
				positionY=450;
		}

		function ftp2 (){
			$("#perso").css({left:"650px"}).css({top:"750px"});
				positionX=650;
				positionY=750;
		}

	//permet de voir si on a récupéré les objets dans les coffres
		recuperer();
			function recuperer (){
				recup=localStorage.getItem("anneau");
				if (recup=="vrai") {
					$("#anneau").css({opacity:1});
				}
			}
		recuperer2();
			function recuperer2 (){
				recup2=localStorage.getItem("fromage");
				if (recup2=="vrai") {
					$("#fromage").css({opacity:1});
				}
			}
	//positionne le personnage en fonction de quelle page il vient
		var positionperso=document.getElementById("perso")
			position();
				function position(){
					localStorage.setItem("perso","droite");
				}
		var page=localStorage.getItem("page");
		localStorage.setItem("page","projet");
			position();
					function position(){
						if (page=="page1"){
							$("#perso").css({left:"800px"}).css({top:"750px"});
							positionX=800;
							positionY=750;
						}
							else {
								$("#perso").css({left:"0px"}).css({top:"750px"});
								positionX=0;
								positionY=750;
							}
					}


	//disparition de la div des souvenirs
	function disparition(){
		timer=setInterval(dispa,100);
	}
		function dispa(){
		opa=opa-0.1;
		$("#souv").css("opacity",opa);
		}

});
