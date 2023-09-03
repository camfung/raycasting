class Player {
    constructor(x, y, fov) {
        this.pos = createVector(x, y);
        this.rays = []; 
        for (let i = 0; i < fov; i+=2) {
          this.rays.push( new Ray( this.pos, radians(i) ) );
        }
    }
    
    update(x, y) {
        circle(x,y, 10)
        this.pos.x = x; 
        this.pos.y = y; 
    }

    updateRays(boundaries) {
        for (let ray of this.rays) {
            let record = Infinity;
            let closest = null;
            for (boundary of boundaries) {
              const pt = ray.cast(boundary); 
              if (pt) {
                const d = p5.Vector.dist(this.pos, pt);
                if (d < record) {
                  record = d;
                  closest = pt;
                }
              } 
            }
            if (closest) {
                stroke(ray.color, 100);
                ellipse()
                line(this.pos.x, this.pos.y, closest.x, closest.y);
              }
          }
    }

    move(dx, dy) {
        // Update the player's position
        this.pos.x += dx;
        this.pos.y += dy;
      }
}
