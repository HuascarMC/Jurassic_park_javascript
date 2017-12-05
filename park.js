const Park = function() {
 this.enclosure = [];
}

Park.prototype.add = function(dinosaur) {
 this.enclosure.push(dinosaur);
}

Park.prototype.remove = function(type) {
 for (var dinosaur of this.enclosure) {
  if (dinosaur.type == type)
  var index = this.enclosure.indexOf(dinosaur);
  this.enclosure.splice(index, 1);
 }
}

Park.prototype.countDinosaurGivenOffspring = function(NumberOffsprings) {
 count = 0;
 for (var dinosaur of this.enclosure) {
  if (dinosaur.offsprings > NumberOffsprings) {
    count++;
  }
 }
 return count;
}

Park.prototype.countDinosaursGivenYear = function(year) {
 count = 0;
 for (var dinosaur of this.enclosure) {
  count += (dinosaur.offsprings * year);
  count++;
 }
 return count;
}

module.exports = Park;
