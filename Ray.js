class Ray {
    constructor(pos, angle, c=color(255)) {
        this.origin = pos;
        this.direction = p5.Vector.fromAngle(angle);
        this.color = c;
    }

    update(x, y) {
        let newX = x - this.origin.x
        let newY = y - this.origin.y

        this.direction = createVector(newX, newY);
        this.direction.normalize()

    }

    cast(wall) {
        const x1 = wall.a.x;
        const x2 = wall.b.x; 
        const y1 = wall.a.y; 
        const y2 = wall.b.y;

        const x3 = this.origin.x;
        const x4 = this.origin.x + this.direction.x;
        const y3 = this.origin.y;
        const y4 = this.origin.y + this.direction.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0) { return;}

        const t = ((x1-x3)*(y3-y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;
        if (t > 0 && t < 1 && u > 0) {
            let ptx = ((x1*y2 - y1*x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / den
            let pty = ((x1*y2 - y1*x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / den
            let pt = createVector(ptx, pty);

            return pt
        } else {
            return; 
        }
    }

}