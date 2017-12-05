const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');

describe('Park', function() {
  let park;
  let dinosaur;

  beforeEach(function() {
   const Park = new Park();
   const dinosaur1 = new Dinosaur('Tyrannosaurus');
   const dinosaur2 = new Dinosaur('Velociraptor');
   const dinosaur3 = new Dinosaur('Triceratops');
  })

 it('should have an enclosure', function() {
   assert.strictEqual(Park.enclosure.length, 0);
 })
})
