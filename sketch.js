let boundaries = []; 
let d = 100; 
let v = 10; 
let player;
let updatePlayer = false
let width;
let height;

function setupWalls() {
  // make walls surrounding the canvas
  boundaries.push(new Boundary(0, 0, width, 0));
  boundaries.push(new Boundary(width, 0, width, height));
  boundaries.push(new Boundary(width, height, 0, height));
  boundaries.push(new Boundary(0, height, 0, 0));
}

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  player = new Player(width/2,height/2, 360);
  setupWalls();
  createCanvas(width, height);
}

function draw() {
  background(0);
  if (updatePlayer) {
    player.update(mouseX, mouseY)
  }

  for (boundary of boundaries) {
    boundary.update(d);
    boundary.show();
  }

  player.updateRays(boundaries);
}

function keyPressed() {
  // key code for space is 32
  if (keyCode == 32) {
    updatePlayer = !updatePlayer;
  }
}

