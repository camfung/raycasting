let boundaries = []; 
let d = 100; 
let v = 10; 
let player;
let updatePlayer = false
function setup() {
  width = window.innerWidth; 
  height = window.innerHeight;
  
  // surround the canvas with walls
  // boundaries.push(new Boundary(0, 0, width, 0));
  // boundaries.push(new Boundary(width, 0, width, height));
  // boundaries.push(new Boundary(width, height, 0, height));
  // boundaries.push(new Boundary(0, height, 0, 0));
  
  // // make a box 
  // boundaries.push(new Boundary(100, 100, 100, height - 100));
  // boundaries.push(new Boundary(100, 100, width - 100, 100));
  // boundaries.push(new Boundary(width - 100, 100, width - 100, height - 100));
  // boundaries.push(new Boundary(width - 100, height - 100, 100, height - 100));
  
  boundaries.push(new Boundary(500, 500, 700, height - 600, true));
  boundaries.push(new Boundary(width - 200, 100, width - 200, height - 100));
  boundaries.push(new Boundary(width, 100, width , height - 100));
  player = new Player(width/2,height/2)

  for (let i = 0; i < 360; i+=.5) {
    player.rays.push( new Ray( player.pos, radians(i) ) );
  }
  let newBoundaries = [];
  for (let i = 0; i < boundaries.length; i++) {
    let a = boundaries[i].a;
    let b = boundaries[i].b;
    let c = p5.Vector.lerp(a, b, 0.5);
    let d = p5.Vector.sub(b, a);
    d.rotate(PI / 2);
    d.mult(0.5);
    let e = p5.Vector.add(c, d);
    let f = p5.Vector.sub(c, d);
    newBoundaries.push(new Boundary(a.x, a.y, f.x, f.y));
    newBoundaries.push(new Boundary(f.x, f.y, e.x, e.y));
    newBoundaries.push(new Boundary(e.x, e.y, b.x, b.y));
  }

  boundaries = newBoundaries;

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
    if (d > width-100 || d < 100) {
    v *= -1;
  }
  d += v;
}

function keyPressed() {
  // key code for space is 32
  if (keyCode == 32) {
    updatePlayer = !updatePlayer;
  }
}

