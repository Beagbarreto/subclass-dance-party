var SpongeBob = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

SpongeBob.prototype = Object.create(Dancer.prototype);
SpongeBob.prototype.constructor = SpongeBob;

SpongeBob.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
