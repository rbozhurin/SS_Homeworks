define({ 
  flag: true,
  
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },

  init: function() {
    this.view.onClick = this.clicked;
//     this.view.SwitchTheme.onSlide = this.changeTheme;
    
  },

  preShow: function() {
    var contact = kony.store.getItem("contactDetails");
    this.view.lblName.text = contact.name;
    this.view.imgPerson.src = contact.src;
    this.view.txtNumber.text = contact.phone;
    this.view.txtHome.text = contact.email;
    this.view.lblEdit.onTouchStart = this.editText;
    
    this.view.txtHome.setEnabled(!this.flag);
    this.view.txtNumber.setEnabled(!this.flag);
  },
  
  editText: function() {
    
    if (this.flag) {
      this.view.lblEdit.text = "Done";
      this.view.txtHome.setEnabled(this.flag);
      this.view.txtNumber.setEnabled(this.flag);
    } else {
      this.view.lblEdit.text = "Edit";
      this.view.txtHome.setEnabled(!this.flag);
     this.view.txtNumber.setEnabled(!this.flag);
    }
  },

  clicked: function(){
    var ntf = new kony.mvc.Navigation("frmSegList");
    ntf.navigate();
  },
  
//    changeTheme: function(){
//     function onsuccesscallback() {
//       alert(`Successfully change Theme`);
//     }

//     function onerrorcallback() {
//       alert("Skin not longer exist");
//     }

//     if(this.flag){
//       kony.theme.setCurrentTheme("DarkTheme", onsuccesscallback, onerrorcallback);
//       this.flag = false;
//     }else{
//       kony.theme.setCurrentTheme("MyTheme", onsuccesscallback, onerrorcallback);
//       this.flag = true;
//     }
//   }

});