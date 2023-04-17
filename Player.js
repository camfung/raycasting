class Player {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.rays = []; 
    }
    
    update(x, y) {
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
                if (closest) {
                    stroke(ray.color, 100);
                    line(this.pos.x, this.pos.y, closest.x, closest.y);
                  }
            }
          }
    }
}
