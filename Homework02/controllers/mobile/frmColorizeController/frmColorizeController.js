define({ 

  onViewCreated: function () {
    this.view.preShow = this.preShow;
  },

  preShow: function () {
    this.view.btnGo.onClick = this.actions;
  },

  actions: function() {
    this.view.paintBlock.paint = this.view.txtPickColor.text;
  },

});