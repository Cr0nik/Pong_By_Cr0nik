console.log("### Pong_by_Cr0nik ###")

//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raioBolinha = 20 / 2;

//velocidades da bolinha
let velocidadeXbolinha = 5;
let velocidadeYbolinha = 5;

//variaveis da raquete 1
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

//variaveis da raquete 2
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeYraquete2;

let colidiu = false;

//variaveis do placar
let meuPlacar= 0;
let placarOponente = 0;

//sons do jogo
let ponto;
let raquetada;
let trilha;

function preload(){
  trilha = loadSound('trilha.mp3');
  ponto = loadSound('ponto.mp3');
  raquetada = loadSound('raquetada.mp3');
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  posicaoBolinha();
  colisaoBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  colisaoBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2);
  multiplayer();
  colisaoBiblioteca(xRaquete2, yRaquete2);
  placar();
  marcaPontos();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function posicaoBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function colisaoBolinha(){
    if(xBolinha + raioBolinha > width || xBolinha - raioBolinha< 0){
    velocidadeXbolinha *= -1;
  }
  if(yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0){
    velocidadeYbolinha *= -1;    
  }
}

function mostraRaquete(x, y){
  rect(x, y, wRaquete, hRaquete);
  
}

function movimentaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 10;      
  }
  if(keyIsDown(83)){
    yRaquete += 10;  
  }
}

function multiplayer() {
  if(keyIsDown(UP_ARROW)){
 yRaquete2 -= 10;      
}
if(keyIsDown(DOWN_ARROW)){
 yRaquete2 += 10;  
}
}

function colisaoBiblioteca(x, y){
  colidiu = 
    collideRectCircle(x, y, wRaquete, hRaquete, xBolinha, yBolinha, raioBolinha);
  if(colidiu){
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}

function placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(0,191,255));
  rect(150, 10, 40, 20);
  fill(255);
  text(meuPlacar,170,26);
  fill(color(0,191,255));
  rect(450, 10, 40, 20);
  fill(255);
  text(placarOponente, 470, 26);
}

function marcaPontos(){
  if(xBolinha > 590){
    meuPlacar += 1;
    ponto.play();
  }
  if(xBolinha < 10){
    placarOponente += 1;
    ponto.play();
  }
}

