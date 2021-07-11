define(function() {

	return {
		onViewCreated: function() {
          this.view.onTouchStart = this.alertMsg;
        },
      
      alertMsg: function() {
        alert('This is ' + this.view.lblMail.text);
      }
	};
});