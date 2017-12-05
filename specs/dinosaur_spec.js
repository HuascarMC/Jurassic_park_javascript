const Dinosaur = require('../dinosaur.js');
const assert = require('assert');

describe('dinosaur', function() {

 it('should have a type', function() {
  const dinosaur = new Dinosaur('Tyrannosaurus', 2);
  assert.strictEqual(dinosaur.type, 'Tyrannosaurus');
 })

 it('should have offsprings', function() {
  const dinosaur = new Dinosaur('Tyrannosaurus', 2);
  assert.strictEqual(dinosaur.offsprings, 2);
 })
})
