const Park = function() {
 this.enclosure = [];
}

Park.prototype.add = function(dinosaur) {
 this.enclosure.push(dinosaur);
}

Park.prototype.remove = function(type) {
 for (var dinosaur of this.enclosure) {
  if (dinosaur.type == type)
  var index = this.enclosure.ofIndex(dinosaur);
  this.enclosure.splice(index, 1);
 }
}

module.exports = Park;
