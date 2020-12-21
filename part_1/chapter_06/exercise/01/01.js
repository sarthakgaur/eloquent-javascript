/* A Vector Type */

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

function vecTest() {
  let v1 = new Vec(6, -6);
  let v2 = new Vec(-12, 5);
  let v3 = new Vec(15, -8);

  console.log(v1.length);
  console.log(v2.length);
  console.log(v3.length);
}

vecTest();
