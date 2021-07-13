define({ 
  onViewCreated: function () {
    this.view.preShow = this.preShow;
    },
  
  preShow: function () {
    
    this.actions();
    },
  
  actions: function() {
    this.view.paint.btnGo.onClick = this.colorizeOnClick;
  },
  
  colorizeOnClick: function() {
    var inputText = this.view.txtPickColor.text;
    this.view.paint.paints = inputText;
  },

 });