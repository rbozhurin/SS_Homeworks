define({
  segDataList: [
   {name: "Sotir Cacarov",
	phone: "0884238547",
  	dateAdded: "23/04/2021"},
   {name: "Sofronii Vrachanski",
    phone: "0888236521",
  	dateAdded: "23/04/2021"},
   {name: "Krali Marko i Snejina",
    phone: "0845825521",
  	dateAdded: "23/04/2021"},
   {name: "Sotir Cacarov",
	phone: "0884238547",
  	dateAdded: "23/04/2021"},
   {name: "Sofronii Vrachanski",
    phone: "0888236521",
  	dateAdded: "23/04/2021"},
   {name: "Krali Marko i Snejina",
    phone: "0845825521",
  	dateAdded: "23/04/2021"},
   {name: "Sotir Cacarov",
	phone: "0884238547",
  	dateAdded: "23/04/2021"},
   {name: "Sofronii Vrachanski",
    phone: "0888236521",
  	dateAdded: "23/04/2021"},
   {name: "Krali Marko i Snejina",
    phone: "0845825521",
  	dateAdded: "23/04/2021"},
    {name: "Ivan Minchev",
     phone: "0888010203",
     dateAdded: "25/06/2021"},
    {name: "Denica Stoeva",
     phone: "0888040253",
     dateAdded: "25/06/2021"},
    {name: "Magazin za mebeli",
     phone: "0888123456",
     dateAdded: "25/06/2021"},
  ],
  
  formatedData: [],
  
  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },

  init: function() {
    this.formatedSegmentData.call(this,this.segDataList,this.formatedData);
    this.view.segList.onRowClick = this.onRowClicked;
  },
  
  preShow: function() {
    this.view.segList.setData(this.formatedData);
  },
  
  formatedSegmentData: function(responseData,fomratedData) {
    var scope = this;
    responseData.forEach(function(contact) {
      fomratedData.push({
        "lblHeading": {"text": contact.name},
        "lblDescription": {"text": contact.phone},
        "lblTime": {"text": contact.dateAdded},
        "lblStrip": {"width": "2%"}
      });
    });
  },
  
  onRowClicked: function() {
    var indexOfSelectedRow = this.view.segList.selectedRowIndex[1];
    var contactData = this.segDataList[indexOfSelectedRow];
    kony.store.setItem("contactDetails", contactData);
    
    var ntf = new kony.mvc.Navigation("Homescreen");
    ntf.navigate();
  },

 });