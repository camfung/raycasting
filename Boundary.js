class Boundary {
    constructor(x1, y1, x2, y2, mover=false) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        this.mover = mover
    }

    update(d) {
        if (this.mover) {
            this.a.x = d;
            this.b.x = d;
        }
    }
    
    show() {
        stroke(255);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}