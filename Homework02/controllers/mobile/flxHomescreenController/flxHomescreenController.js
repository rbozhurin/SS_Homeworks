define({ 
	
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },

  init: function() {
    this.view.onClick = this.clicked;
    this.isEditable = false;
    
  },

  preShow: function() {
    var contact = kony.store.getItem("contactDetails");
    this.view.lblName.text = contact.name;
    this.view.imgPerson.src = contact.src;
    this.view.txtNumber.text = contact.phone;
    this.view.txtHome.text = contact.email;
    this.view.lblEdit.onTouchStart = this.editText;
    
    this.view.txtHome.setEnabled(false);
    this.view.txtNumber.setEnabled(false);
  },
  
  editText: function() {
    this.isEditable = !this.isEditable;
    
    if (this.isEditable) {
      this.view.lblEdit.text = "Done";
      this.view.txtHome.setEnabled(true);
      this.view.txtNumber.setEnabled(true);
    } else {
      this.view.lblEdit.text = "Edit";
      this.view.txtHome.setEnabled(false);
     this.view.txtNumber.setEnabled(false);
    }
  },

  clicked: function(){
    var ntf = new kony.mvc.Navigation("frmSegList");
    ntf.navigate();
  }

});