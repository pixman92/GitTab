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
    // big.get()[0] - > dates/title/tabs


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

    addToStorage(single){
        chrome.storage.sync.set({'BIGTAB': BIGTAB});
    }

}

// function replaceBIGTABInStorage(BIGTAB){
//     chrome.storage.sync.set({'BIGTAB': BIGTAB});

// }

var saveBIGTAB;
function pullBIG(){
    chrome.storage.sync.get(['BIGTAB'], (result)=>{
        saveBIGTAB = result.BIGTAB;
        console.log('saveBIGTAB', saveBIGTAB);
        return saveBIGTAB;
    });

    var retrieved = new saveBIGTAG()

}