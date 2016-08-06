//comentario

//var diametro solo para aprender variables
var diametro;
diametro = 50;

//se ejecuta solo una vez al principio
function setup() {
  //aqui va lo que hace setup()
  //creamos un lienzo
  //createCanvas(dimensionHor, dimVer);
  //createCanvas(800,600);
  createCanvas(windowWidth, windowHeight);
  
  //los colores en p5.js
  //los valores van entre 0 y 255
  //1 ->grayscale, 0 es negro, 255 es blanco
  //2 ->graysclae+alpha, 0 es transp, 255 solido
  //3->RGB, red, green,blue
  //4->RGB+alpha
  
  //pintar fondo color
  //background(color);
  background(0,255,0);
}


//draw() se ejecuta despues de setup()
//se ejecuta 60 veces por segundo
function draw() {
  
  //pinto fondo cada vez que entro a draw para ver solo 1 elipse
  
  background(0,255,0);
  //background(random(255),random(255),random(255));
  

  estilo();
  
  //dibujar elipse
  //ellipse(posX, posY, width, height);
  //ellipse(300,200,200,100);
  //elipse sigue coordenadas del mouse, coord = mouseX, coord y = mouse Y
  //ellipse(mouseX, mouseY, 100, 50);
  //ellipse(mouseX, mouseY, diametro, diametro);
  
  //diametro += 0.5;
  
  //if(condicion){}
  //if(true)

  if(mouseX > width/2){
    muchasElipses(100);
  }
  else{
    background(0,0,255);
    muchasElipses(1000);
  }
  
}

//definir estilo
function estilo(){
  //definir estilo de la elipse
  //definir ancho del borde
  //para no dibujar borde noStroke();
  //strokeWeight(px);
  strokeWeight(5);
  
  //definir el color del borde
  stroke(0,0,255,255/2);
  
  //definir el color de relleno
  //fill(color);
  fill(255, 0, 0, 255/2);
  
}

function muchasElipses(cantidad){

  //iteracion
  //for(inicio; condicion; refresco){}
  for(var i = 0; i<cantidad; i++){
    noStroke();
    fill(random(255),random(255),random(255),random(255));
    ellipse(random(width),random(height),diametro,diametro);
  }
} 
