const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('Dinosaur', function() {

 it('should have a type', function() {
  const dinosaur = new Dinosaur('Tyrannosaurus', 2);
  assert.strictEqual(dinosaur.getType(), 'Tyrannosaurus');
 })

 it('should have offsprings', function() {
  const dinosaur = new Dinosaur('Tyrannosaurus', 2);
  assert.strictEqual(dinosaur.getOffsprings(), 2);
 })
})
