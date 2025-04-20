class Shape {
    constructor(type, color) {
      this.type = type;
      this.color = color;
    }
  
    clone() {
      return new Shape(this.type, this.color);
    }
  }
  
  module.exports = Shape;