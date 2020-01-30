//file for TAB object framework

var SingleTABGroup = function(title, tabs){
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
        if(data){
            this.single.push(data);
        }else{
            console.log('nothing to add');
        }
        // return single;
    }
    get(){
        return this.single;
    }

    addToStorage(){
        chrome.storage.sync.set({'BIGTAB': this.single});
    }

}

// function replaceBIGTABInStorage(BIGTAB){
//     chrome.storage.sync.set({'BIGTAB': BIGTAB});

// }

var saveBIGTAB; var retrieved;
function pullBIG(){
    //retrieved - main Variable to work with
    chrome.storage.sync.get(['BIGTAB'], (result)=>{
        saveBIGTAB = result.BIGTAB;
        console.log('saveBIGTAB', saveBIGTAB);
        retrieved = new BIGTAB();


        // retrieved.add(saveBIGTAB);
        for(var i=0; i<saveBIGTAB.length; i++){
            retrieved.add(saveBIGTAB[0]);
        }

        return saveBIGTAB;
    });


}