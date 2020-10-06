let bg;
let r;
let folder = "Assets/";
let br = "Digital_culture/";
let project = "Google_search/";
let b = "Background/";
let backgroundname = "Tomgoogle.png";
let bi = "BI/";
let bs = "BS/";
let ii = "I/";
let ss = "S/";
let namei ="bi";
let names = "sb";
let nameii ="i";
let namess = "s";
let endi = ".png";
let ends = ".mp3";
let images = [];
let sounds = [];
let test;
let n = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,
  35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,
  69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];

function preload(){

  bg = loadImage(folder + b + backgroundname);

}


function setup() {
createCanvas(windowWidth, windowHeight);
background(bg);
// image(test, 10,10);

for(let i=1; i<=50; i++){
  for( let j=0; j<=49; j++){
    j = loadImage(br + project + folder + bi+ namei + i + endi)
    append(images,j)
  }
}

for(let i=1; i<=50; i++){
  for( let j=0; j<=49; j++){
    j = loadSound(br + project +folder + bs+ names + i + ends)
    append(sounds,j)
  }
}

for(let i=1; i<=50; i++){
  for( let j=0; j<=49; j++){
    j = loadImage(br + project +folder + ii+ nameii + i + endi)
    append(images,j)
  }
}

for(let i=1; i<=50; i++){
  for( let j=0; j<=49; j++){
    j = loadSound(br + project +folder + ss+ namess + i + ends)
    append(sounds,j)
  }
}

}

function draw() {

r = random(n);



  if(frameCount%60 == 0 ){
  background(images[r]);
  sounds[r].play();
  }


}
