const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')
const assert = require('assert');

describe('Park', function() {
  let park;
  let dinosaur;

  beforeEach(function() {
   park = new Park();
   dinosaur1 = new Dinosaur('Tyrannosaurus', 3);
   dinosaur2 = new Dinosaur('Velociraptor', 7);
   dinosaur3 = new Dinosaur('Triceratops', 1);
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

 it('should get all dinosaurs with an offspring of 2 or higher', function () {
  park.add(dinosaur1);
  park.add(dinosaur2);
  park.add(dinosaur3);
  assert.strictEqual(park.countDinosaurGivenOffspring(2), 2)
 })
})
