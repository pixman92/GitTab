//file for TAB object framework

var SingleTAB - function()






var BIGTAB = function (SingleTAB){
    if(this.singleTabArr==undefined){
        this.singleTabArr = [];
    }else{
        this.singleTabArr.push(SingleTAB);
    }
}