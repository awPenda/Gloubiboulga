$(document).ready(function(){

	var musique = document.querySelector('#starwars');
	musique.play();

var positionX=0, positionY=750;
var vieperso=50;
var vieDV=50;
var puissanceDV=5;
var puissanceperso=5;
var mana=30;

var ligne1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne4=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne5=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne6=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var	ligne7=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne8=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne9=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne10=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne11=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne12=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne13=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne14=[0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0];
var ligne15=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var ligne16=[5,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,5];
var ligne17=[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5];
var ligne18=[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5];
var ligne19=[5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5];
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
			if(tab[positionY/50][(positionX/50)-1]==5){
				window.location="../html/page2.html";
			}
			if(tab[positionY/50][(positionX/50)-1]==10){
				$("#perso").stop();
				$("#darkvador").animate({top:"-200px"},1000).animate({left:"+850px"},100).animate({top:"+750px"},1000);
				$("#perso").animate({left:"50px"},1000);
				setTimeout(debutcombat, 2000);
			}
		}
		if(e.keyCode==39){
			if(tab[positionY/50][(positionX/50)+2]==0){
				droite();
			}
			if(tab[positionY/50][(positionX/50)+2]==5){
				window.location="../html/page4.html";
			}
			if(tab[positionY/50][(positionX/50)+2]==10){
				$("#perso").stop();
				$("#darkvador").animate({top:"-200px"},1000).animate({left:"+850px"},100).animate({top:"+750px"},1000);
				$("#perso").animate({left:"50px"},1000);
				setTimeout(debutcombat, 2000);
			}
		}
	}
	//fonction qui détecte la touche enfoncée

	function gauche (){
		positionX=positionX-50;
		$("#perso").css("transform","rotateY(180deg)").css({left:positionX+"px"});
	};
	function droite (){
		positionX=positionX+50;
		$("#perso").css("transform","rotateY(0deg)").css({left:positionX+"px"});
	};


function debutcombat(){
	$("#manaperso").fadeIn(1000);
	$("#manaperso").append(mana);
	$("#vieperso").fadeIn(1000);
	$("#vieperso").append(vieperso);
	$("#vieDV").fadeIn(1000);
	$("#vieDV").append(vieDV);
	$("#texte0").fadeIn(1000);
	$("#texte0").fadeOut(1000);
	$("#menucombat").fadeIn(5000);
	setTimeout(dvtour, 5000);
}

function dvtour(){
	if (vieDV<=0){
		mortDV();
	}
	if (vieDV > 0){
		$("#texte2").fadeIn(1000);
		$("#texte2").fadeOut(1000);
  a=Math.floor((Math.random()*3));
	if(a==0){
		vieperso= vieperso-puissanceDV;
		$("#darkvador").animate({left:"150px"},1000).animate({left:"850px"},1000);
	}
	if(a==1){
		vieperso=vieperso-puissanceDV*2;
		$("#perso").animate({top:"250px"},1000).animate({top:"750px"},1000);
	}
	if(a==2){
		vieperso=vieperso-puissanceDV*3;
		$("#perso").animate({top:"725px"},1000).animate({left:"750px"},1000).animate({left:"50px"},1000).animate({top:"750px"},1000);
	}
	if(vieperso<=0){
		alert("Mort");
		vieperso = 20;
		window.location="../index.html"
		mana=30;
		vieDV=50;
		vieperso=50;
	}
	$("#vieperso").empty().append(vieperso);
	setTimeout(persotour, 1000);
}}

function persotour(){
	$("#texte3").fadeIn(1000);
	$("#texte3").fadeOut(1000);

	puissanceDV=5;
	$("#fuirbouton").fadeIn(5000);
	$("#fuirbouton").on("click",fuir);
	$("#attaquerbouton").fadeIn(5000);
	$("#attaquerbouton").on("click",attaquer);
	$("#defendrebouton").fadeIn(5000);
	$("#defendrebouton").on("click",defendre);
	$("#specialbouton").fadeIn(5000);
	$("#specialbouton").on("click",special);
}

function fuir(){
	annulerbouton();
	vieperso=20;
	window.location="../html/page2.html";
}

function attaquer(){
	vieDV = vieDV - puissanceperso;
	$("#perso").animate({left:"750px"},1000).animate({left:"50px"},1000);
	puissanceperso = 5;
	$("#vieDV").empty().append(vieDV);
	annulerbouton();
	setTimeout(dvtour, 1000);
}

function defendre(){
	puissanceDV = puissanceDV/2;
	annulerbouton();
	setTimeout(dvtour, 1000);
}
if(mana<=18){
	mana=mana+2;
}
$("#manaperso").empty().append(mana);
function special(){
	$("#menucombat").animate({height:"200px"},1000).animate({top:"500px"},1000);
	$("#boostbouton").fadeIn(5000);
	$("#boostbouton").on("click",boost);
	$("#magiebouton").fadeIn(5000);
	$("#magiebouton").on("click",magie);
	$("#healbouton").fadeIn(5000);
	$("#healbouton").on("click",heal);
}

function boost(){
	puissanceperso=5;
	puissanceperso=puissanceperso*3;
	mana=mana-5;
	$("#manaperso").empty().append(mana);
	annulerbouton();
	setTimeout(dvtour, 1000);
}

function magie(){
	vieDV=vieDV-puissanceperso*4;
	mana=mana-10;
	$("#manaperso").empty().append(mana);
	$("#vieDV").empty().append(vieDV);
	annulerbouton();
	setTimeout(dvtour, 1000);
}

function heal(){
	vieperso=vieperso+20;
	mana=mana-5;
	$("#manaperso").empty().append(mana);
	$("#vieperso").empty().append(mana);
	annulerbouton();
	setTimeout(dvtour, 1000);
}

function annulerbouton(){
	$("#menucombat").animate({top:"580px"},1000).animate({height:"120px"},1000);
	$("#fuirbouton").off();
	$("#attaquerbouton").off();
	$("#defendrebouton").off();
	$("#specialbouton").off();
	$("#boostbouton").off().fadeOut(500);;
	$("#magiebouton").off().fadeOut(500);;
	$("#healbouton").off().fadeOut(500);;
}

function mortDV(){
	$("#menucombat").fadeOut(5000);
	$("#fuirbouton").fadeOut(5000);
	$("#attaquerbouton").fadeOut(5000);
	$("#defendrebouton").fadeOut(5000);
	$("#specialbouton").fadeOut(5000);
	$("#texte1").fadeIn(5000);
	$("#texte1").fadeOut(5000);
	$("#darkvador").css("opacity","0");
	var	enleves=ligne16.splice(11, 1, 0);
	mana=30;
	vieDV=50;
	vieperso=50;
	
}

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

	//positionne le personnage en fonction de la page d'où il vient
var page=localStorage.getItem("page");
    localStorage.setItem("page","page3");
    position();
    function position(){
        if (page=="page2"){
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

//disparition de la div des souvenirs
        function disparition(){
            timer=setInterval(dispa,100);
        }
            function dispa(){
                opa=opa-0.1;
                $("#souv").css("opacity",opa);
            }

});
