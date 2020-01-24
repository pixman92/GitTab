//file for TAB object framework

var SingleTAB = function(title, tabs){
    var tmpDate = new Date();
    this.date = tmpDate;

    this.title = title;
    this.tabs = tabs;
}






var BIGTAB = function (SingleTAB){
    // if(this.singleTabArr==undefined){
    //     this.singleTabArr = [];
    // }else{
        this.singleTabArr = (SingleTAB);
    // }
}