define(function() {

  var colors = {
    green: "4CEC21",
    blue:  "217DEC",
    pink:  "E621EC",
    yellow:"ECEC21"
  };

  var paints = function() {
    var color = this.view.txtPickColor.text;

    switch(color){
      case "green":
        this.view.flxBackgroundColor.backgroundColor = colors.green;
        break;
      case "blue":
        this.view.flxBackgroundColor.backgroundColor = colors.blue;
        break;
      case "pink":
        this.view.flxBackgroundColor.backgroundColor = colors.pink;
        break;
      case "yellow":
        this.view.flxBackgroundColor.backgroundColor = colors.yellow;
        break;
    }
  };

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._paints = paints.bind(this);
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, 'paint', () => {
        return this._rating;
      });
      defineSetter(this, 'paint', value => {
        this._rating = value;
        this._isStatic = true;
        this._paints(this._paint);
      });
    }
  };
});