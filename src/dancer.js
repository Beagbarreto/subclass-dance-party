var Dancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  };

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
//does not requiere extra clock tick
  //var context = this;
  //setTimeout(function(){ context.step()}, this.timeBetweenSteps);
};
Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top:topbarleft:left
  };
  this.$node.css(styleSettings);
};

  /*  var this = Object.create(Dancer.prototype);

  this.step = function() {
      this.setTimeout(dancer.step, this.timeBetweenSteps);


    dancer.$node.css(styleSettings);
  };

  Dancer.prototype.setPosition = function(top, left);

};
var makeDancer = function(top, left, timeBetweenStep){


}
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step

  // use jQuery to create an HTML <span> tag
