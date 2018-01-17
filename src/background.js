var backgroundColor = function(changeColor) {
  
<div class="background"> </div>//in html

  var background = $('background');
  var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
  var currentIndex = 0;
  setInterval(function () {
     styles.css({
       backgroundColor: colors[currentIndex]
     });
     if (!colors[currentIndex]) {
         currentIndex = 0;
     } else {
         currentIndex++;
     }
  }, 100);
     body {
      transition: 200 ease;
    }
  }
};

/*

  if (this._rotateMichael === 1) {
    this.$node.removeClass('moonWalkerRight');
    this.$node.addClass('moonWalker');
    this._rotateMichael = 0;
  } else {
    this.$node.removeClass('moonWalker');
    this.$node.addClass('moonWalkerRight');
    this._rotateMichael = 1;

var StarDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = Dancer.prototype.step;


  this.$node.prepend('<img id="star" src="Star.png" height="175" width="175" />').addClass('star');
  var left= Math.random() * 500;
  var top = Math.random() * 300;
  this.$node.css('top',''+top+'px').css('left','' + left + 'px');
  this.step();
};
