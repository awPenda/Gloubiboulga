$(document).ready(function(){
		var musique = document.querySelector('#scoobydoo');
		musique.play();
	//variable opacité
		var opa=1;
	//variables pour le déplacement et la position du personnage;
		var n=1,positionXG;
		var positionX=0, positionY=750;
	//variables pour la position du personnage et des objets
		var p,p1,ptp1,ptp1y,ptp3,ptp3y;

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
		var ligne10=[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
		var ligne11=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne12=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne13=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne14=[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
		var ligne15=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		var ligne16=[5,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,5];
		var ligne17=[5,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,5];
		var ligne18=[5,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,5];
		var ligne19=[5,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,5];
		var ligne20=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
		var tab=[ligne1,ligne2,ligne3,ligne4,ligne5,ligne6,ligne7,ligne8,ligne9,ligne10,ligne11,ligne12,ligne13,ligne14,ligne15,ligne16,ligne17,ligne18,ligne19,ligne20];


	//animation fantome
		var temps=setInterval(animationG,50);
			function animationG (){
				positionXG=$("#fantome").css("left");
					if((n==-1)&&(positionXG>="150px")){
						$("#fantome").animate({left:"+=-10px"},10)
					}
					if((n==1)&&(positionXG<="750px")){
						$("#fantome").animate({left:"+=10px"},10)
					}
					if(positionXG=="750px"){
						n=-1;
					}
					if(positionXG=="150px"){
						n=1;
					}
				/**meurt quand on touche le fantome**/
				pXG=parseInt($("#fantome").css("left"));
				position=parseInt($("#perso").css("left"));
				position1=parseInt($("#perso").css("top"));
					if (position+50<=pXG) {
						if((position+50>=pXG)&&(position<=pXG)&&(position1==450)){
							mort();
						}
					}
						else {
							if((position-50<=pXG)&&(position>=pXG)&&(position1==450)){
								mort();
							}
						}


			}

	//pour animation du perso
		var perso=new JSMovieclip($("#perso"),{
		framerate:9,
		direction:"h",
		frames_number:5,
		width:100
		});
		perso.play(true);

	//gestion du clavier
		$(document).on("keydown",fonction1); //détecte si il y a une touche appuyée

		function fonction1(e){
			if(e.keyCode==37){
				if(tab[positionY/50][(positionX/50)-1]==0){
					gauche();
				}
				if(tab[positionY/50][(positionX/50)-1]==9){
					mort();
				}
				if(tab[positionY/50][(positionX/50)-1]==5){
					window.location="../html/page4.html";
				}
			}
			if(e.keyCode==39){
				if(tab[positionY/50][(positionX/50)+2]==0){
					droite();
				}
				if(tab[positionY/50][(positionX/50)+2]==9){
					mort();
				}
				if(tab[positionY/50][(positionX/50)+2]==5){
					window.location="../html/fin.html";
				}
			}

			//si on appuie sur e, on regarde la position du personnage, et si elle corresponds a un teleporteur, ou a un objet, le personnage peut l'utiliser
				if(e.keyCode==69){
					//position du personnage
						p=parseInt($("#perso").css("left"));
						p1=parseInt($("#perso").css("top"));
					//position des tp
						ptp1=parseInt($("#tp1").css("left"));
						ptp1y=parseInt($("#tp1").css("top"));
						ptp3=parseInt($("#tp3").css("left"));
						ptp3y=parseInt($("#tp3").css("top"));

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
					//pour le teleporteur 3
						if (p+50<=ptp3) {
							if((p+50>=ptp3)&&(p<=ptp3)&&(p1==ptp3y)){
								ftp3();
							}
						}
						if(p-50<=ptp3) {
							if((p-50<=ptp3)&&(p>=ptp3)&&(p1==ptp3y)){
								ftp3();
							}
						}
				}
		}

	//fonction pour le déplacement du personnage
		function gauche (){
			positionX=positionX-50;
				$("#perso").css("transform","rotateY(180deg").css({left:positionX+"px"});
		};
		function droite (){
			positionX=positionX+50;
				$("#perso").css("transform","rotateY(0deg)").css({left:positionX+"px"});
				disparition();
		};

	//téléporteurs
		function ftp1 (){
			$("#perso").css({left:"250px"}).css({top:"450px"});
				positionX=250;
				positionY=450;
		}
		function ftp2 (){
			$("#perso").css({left:"650px"}).css({top:"450px"});
				positionX=650;
				positionY=450;
		}
		function ftp3 (){
			$("#perso").css({left:"700px"}).css({top:"750px"});
				positionX=700;
				positionY=750;
		}

	//recuperation des objets dans le localstorage
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

	//quand vous êtes mort
		function mort(){
			$("#trou").css({backgroundColor:"black"});
			alert("Vous êtes mort");
			window.location="../index.html";
		}
	//disparition de la div des souvenirs
		function disparition(){
			timer=setInterval(dispa,100);
		}
			function dispa(){
				opa=opa-0.1;
				$("#souv").css("opacity",opa);
			}
	//positionne le personnage en fonction de la page d'où il vient
		var page=localStorage.getItem("page");
		localStorage.setItem("page","page5");
			position();
				function position(){
					if (page=="page4"){
						$("#perso").css({left:"0px"}).css({top:"750px"});
						positionX=0;
						positionY=750;
					}
					else {
						$("#perso").css({left:"800px"}).css({top:"750px"});
						positionX=800;
						positionY=750;
					}
				}

});
