var jellyFish = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

jellyFish.prototype = Object.create(Dancer.prototype);
jellyFish.prototype.constructor = jellyFish;

jellyFish.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  };
};
