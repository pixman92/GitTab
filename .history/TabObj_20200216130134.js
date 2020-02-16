//file for TAB object framework

var SingleTABGroup = function(title, tabs, date){
    // var tmpDate = new Date();
    this.date = date;

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
        console.log('remember to addToStorage()');
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

