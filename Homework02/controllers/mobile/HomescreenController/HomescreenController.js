define({ 

  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },

  init: function() {
    this.view.onClick = this.clicked;
  },

  preShow: function() {
    var contact = kony.store.getItem("contactDetails");
    this.view.lblName.text = contact.name;
    this.view.imgPerson.src = contact.src;
    this.view.txtNumber.text = contact.phone;
    this.view.txtHome.text = contact.email;
  },

  clicked: function(){
    var ntf = new kony.mvc.Navigation("frmSegList");
    ntf.navigate();
  }

});