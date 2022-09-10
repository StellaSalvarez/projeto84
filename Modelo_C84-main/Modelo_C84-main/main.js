var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");
var img;

img_width = 300;
img_height = 100;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //definindo uma variável com uma nova imagem
	img_imgTag.onload = uploadimg; // ajustando uma função, ao carregar essa variável
	img_imgTag.src = img_image;   // carregar uma imagem
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML = "Você pressionou uma tecla do alfabeto";
			console.log("Tecla do alfabeto");
	    }
		if(keyPressed >=48 && keyPressed<=57){
			numberkey();
			document.getElementById("d1").innerHTML="Você pressionou um número";
			console.log("Número")
	    }
		if(keyPressed >=37 && keyPressed<=40){
			arrowkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla direcional";
			console.log("tecla direcional")
		}
		if(keyPressed == 17||keyPressed == 18||keyPressed == 27){
			specialkey();
			document.getElementById("d1").innerHTML="Você pressionou uma tecla especial";
			console.log("tecla especial");

		}  
		  if(keyPressed == 13||keyPressed == 16||keyPressed == 46){
			otherkey();
			document.getElementById("d1").innerHTML="Você pressionou outra tecla";
			console.log("outra tecla")
		}
		
}

function aplhabetkey()
{
	img_image="alfabeto.png";
	add();

}
function numberkey()
{
	img_image="número.png";
	add();	
}
function arrowkey()
{
	img_image="direcional.png";
	add();
}
function specialkey()
{
	img_image="especial.png";
	add();
}
function otherkey()
{
	img_image="outras.png";
	add();
}
	
