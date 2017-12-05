const Dinosaur = function(type, offsprings) {
 this.type = type;
 this.offsprings = offsprings;
}

Dinosaur.prototype.getType = function() {
 return this.type;
}

Dinosaur.prototype.getOffsprings = function() {
 return this.offsprings;
}

module.exports = Dinosaur;
