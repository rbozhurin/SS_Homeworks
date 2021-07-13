define(function() {
  var colors = {
    green: "4CEC21",
    blue:  "217DEC",
    pink:  "E621EC",
    yellow:"ECEC21"
  };
  var painting = function(color) {

    switch(color){
      case "green":
        this.view.flxPaint.backgroundColor = colors.green;
        break;
      case "blue":
        this.view.flxPaint.backgroundColor = colors.blue;
        break;
      case "pink":
        this.view.flxPaint.backgroundColor = colors.pink;
        break;
      case "yellow":
        this.view.flxPaint.backgroundColor = colors.yellow;
        break;
    }
  };
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._paint = "sknPaint";
      this._painting = painting.bind(this);
    },

    initGettersSetters: function() {
      defineGetter(this, 'paint', () => {
        return this._paint;
      });
      defineSetter(this, 'paint', value => {
        this._paint = value;
      });
    },
  };
});