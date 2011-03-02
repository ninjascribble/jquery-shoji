/* Author: Scott Grogan: http://ninjascript.com

*/
(function($) {
  
  var Shoji = function(duration, callback, opts) {
    
    var defaults = {
      inEffect: 'fade', // slide
      outEffect: 'fade', // slide
      context: this
    };
    
    if (opts) { $.extend( defaults, opts ); }
    
    opts.duration = duration;
    opts.callback = callback;
    
    this.opts = opts;
    
    this.screen = $('<div></div>').
      css('backgroundColor', '#fff').
      css({ position: 'absolute', display: 'none' }).
      appendTo('body');
    
  };
  
  Shoji.prototype.init = function(x,y,w,h) {
    this.createScreen(x,y,w,h);
  }
  
  Shoji.prototype.createScreen = function(x,y,w,h) {
    var css = {
      top: y,
      left: x,
      width: w,
      height: h
    }
    this.screen.css(css);
    this.transitionIn();
  };
  
  Shoji.prototype.transitionIn = function() {
    var my = this;
    switch (this.opts.inEffect) {
      case 'slide': 
        this.screen.slideDown(my.opts.duration, function() {
          my.applyCallback(my);
        });
        break;
      case 'fade':
      default:
        this.screen.fadeIn(my.opts.duration, function() {
          my.applyCallback(my);
        });
        break;
    }
  };
  
  Shoji.prototype.applyCallback = function(thisContext) {
    thisContext.opts.callback.apply(this.context);
    thisContext.transitionOut();
  };
  
  Shoji.prototype.transitionOut = function() {
    var my = this;
    switch (this.opts.outEffect) {
      case 'slide': 
        this.screen.slideUp(my.opts.duration, function() {
          my.destroyScreen(my);
        });
        break;
      case 'fade':
      default:
        this.screen.fadeOut(my.opts.duration, function() {
          my.destroyScreen(my);
        });
        break;
    }
  };
  
  Shoji.prototype.destroyScreen = function(thisContext) {
    thisContext.screen.remove();
  };
  
  $.fn.shoji = function(duration, callback, opts) {
    
    opts = opts || {};
    
    var s = new Shoji(duration, callback, opts);
    var x = this.offset().left;
    var y = this.offset().top;
    var w = this.outerWidth();
    var h = this.outerHeight();
    
    s.init(x,y,w,h);
    
    return this;
    
  };
  
})(jQuery);






















