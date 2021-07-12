define({ 
  onViewCreated: function () {
    this.view.preShow = this.preShow;
    },
  
  preShow: function () {
    this.view.ratingStatic.isStatic = true;
    this.view.ratingStatic.rating = 2;
    
    this.view.ratingActive.isStatic = false;
    
    this.actions();
    },
  
  actions: function() {
    this.view.btnPopulateStaticRating.onClick = this.populateStaticComponentOnClick;
  },
  
  populateStaticComponentOnClick: function() {
    var inputText = this.view.txtBoxStaticRatingInput.text;
    this.view.ratingStatic.rating = inputText;
  },

 });