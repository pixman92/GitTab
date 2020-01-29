//file for TAB object framework

var SingleTAB = function(title, tabs){
    var tmpDate = new Date();
    this.date = tmpDate;

    this.title = title;
    this.tabs = tabs;
}



class BIGTAB {

    // big = new BIGTAB()
    // big.add(single)
    // big.get()


    constructor(){
        this.single=[];
    //     this.single.push(SingleTAB);
    }

    add(data){
        this.single.push(data);
        // return single;
    }
    get(){
        return this.single;
    }


}

function replaceBIGTABInStorage(BIGTAB){
    chrome.storage.sync.set({'BIGTAB': BIGTAB});

}

function pullBIG(){
    chrome.storage.sync.get(['BIGTAB'], (result)=>{
        tmpObj = result.BIGTAB;
        console.log('tmpObj', tmpObj);
        return tmpObj;
    });
}