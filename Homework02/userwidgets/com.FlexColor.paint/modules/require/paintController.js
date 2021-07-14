define(function() {

  var colors = {
    green: "4CEC21",
    blue:  "217DEC",
    pink:  "E621EC",
    yellow:"ECEC21"
  };
  var painting = function(color) {

    if(colors.hasOwnProperty(color)){
      this.view.backgroundColor = colors[color];

      return;
    }

    alert("Wrong Input!");

  };
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._paint = "ff0000";
      this._painting = painting.bind(this);
    },

    initGettersSetters: function() {
      defineGetter(this, 'paint', () => {
        return this._paint;
      });
      defineSetter(this, 'paint', value => {
        this._paint = value;
        this._painting(this._paint);
      });
    },
  };
});