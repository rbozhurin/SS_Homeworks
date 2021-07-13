define({ 
  onViewCreated: function () {
    this.view.preShow = this.preShow;
    },
  
  preShow: function () {
    this.view.paintBlock.paint = this.view.txtPickColor.text;
    this.actions();
    },
  
  actions: function() {
    this.view.btnGo.onClick = this.populateColorOnClick;
  },
  
  populateColorOnClick: function() {
    var colors = {
    green: "4CEC21",
    blue:  "217DEC",
    pink:  "E621EC",
    yellow:"ECEC21"
  };
    var color = this.view.txtPickColor.text;
    
    switch(color){
      case "green":
        this.view.paintBlock.backgroundColor = colors.green;
        break;
      case "blue":
        this.view.paintBlock.backgroundColor = colors.blue;
        break;
      case "pink":
        this.view.paintBlock.backgroundColor = colors.pink;
        break;
      case "yellow":
        this.view.paintBlock.backgroundColor = colors.yellow;
        break;
    }
    
    
  },

 });