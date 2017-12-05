const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');

describe('Park', function() {
  let park;
  let dinosaur;

  beforeEach(function() {
   park = new Park();
   dinosaur1 = new Dinosaur('Tyrannosaurus');
   dinosaur2 = new Dinosaur('Velociraptor');
   dinosaur3 = new Dinosaur('Triceratops');
  })

 it('should have an enclosure', function() {
   assert.strictEqual(park.enclosure.length, 0);
 })

 it('should be able to add dinosaur', function () {
  park.add(dinosaur1);
  assert.strictEqual(park.enclosure.length, 1);
 })

 it('should be able remove dinosaur by type', function () {
  park.add(dinosaur1);
  park.add(dinosaur2);
  park.remove('Tyrannosaurus');
  assert.strictEqual(park.enclosure.length, 1);
 })
})
