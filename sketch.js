let boundaries = []; 
let d = 100; 
let v = 10; 
let chaser;
let player;
let updatePlayer = false
let width;
let height;
let pos; 
let speed = 3;
let playerSpeed = 4;


function setupWalls() {
  // make walls surrounding the canvas
  boundaries.push(new Boundary(0, 0, width, 0));
  boundaries.push(new Boundary(width, 0, width, height));
  boundaries.push(new Boundary(width, height, 0, height));
  boundaries.push(new Boundary(0, height, 0, 0));

  // make a box 
  // boundaries.push(new Boundary(100, 100, 100, 200));
  // boundaries.push(new Boundary(100, 200, 200, 200));
  // boundaries.push(new Boundary(200, 200, 200, 100));
  // boundaries.push(new Boundary(200, 100, 100, 100));
  
}

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  pos = new createVector(10, 10)
  chaser = new Player(pos.x, pos.y, 0);
  player = new Player(50, 50, 0)
  setupWalls();
  createCanvas(width, height);

}

function getNormVec(p1, p2) {
  //p1 is the origin 
  // p2 is the dest

  const vx = p2.x - p1.x
  const vy = p2.y - p1.y

  dist = sqrt((vx*vx) + (vy*vy));

  if (dist < 20) {
    return createVector(0,0);
  }

  const normVec =  createVector(vx / dist, vy/dist);
  return normVec;
}

function draw() {
  background(0);
  handleWASDMovement()
  let mouse = player.pos
  const normVec = getNormVec(pos, mouse);


  pos = pos.add(normVec.mult(speed))
  chaser.update(pos.x, pos.y)
  player.update(player.pos.x, player.pos.y)
  console.log(player.pos)

  // for (boundary of boundaries) {
  //   boundary.update(d);
  //   boundary.show();
  // }
  stroke(255)
  line(chaser.pos.x, chaser.pos.y, player.pos.x, player.pos.y)
  chaser.updateRays(boundaries);
// frameRate(1)

}

function handleArrowKeyMovement() {
  if (keyIsDown(LEFT_ARROW)) {
    player.move(-playerSpeed, 0);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.move(playerSpeed, 0);
  }
  if (keyIsDown(UP_ARROW)) {
    player.move(0, -playerSpeed);
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.move(0, playerSpeed);
  }
}

function handleWASDMovement() {
  if (keyIsDown(65)) { // 'A' key for left
    player.move(-playerSpeed, 0);
  }
  if (keyIsDown(68)) { // 'D' key for right
    player.move(playerSpeed, 0);
  }
  if (keyIsDown(87)) { // 'W' key for up
    player.move(0, -playerSpeed);
  }
  if (keyIsDown(83)) { // 'S' key for down
    player.move(0, playerSpeed);
  }
}
