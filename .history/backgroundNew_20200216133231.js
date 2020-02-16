
window.onload = ()=>{
    makeObjects();
    
    // makeNice();

    chrome.storage.sync.get(['saveMe'], (result)=>{
        if(result.saveMe==true){
            pullBIG();
            retrieved.add()
            chrome.storage.sync.set({'saveMe': false});
        }
    });

//    receiveMessage();
}


//========================================

//file reserved for opening & deleting of grouped TAB objects
//soon to be OLD
// var str=[]; var tabSaved="";
// function makeNice(){

//     chrome.storage.sync.get(['tabSet'], (result)=>{
//         tabSaved = result.tabSet;
//         console.log('tab2', tabSaved);

//         var urlStr = "";
        
//         //=====================================================
//         for(var i=0; i < tabSaved.tabs.length; i++) {
//             urlStr += makeStr(['<div>', tabSaved.tabs[i].url, '</div>']);
            
//         }


//         //========================================
//         for(var i=0; i<tabSaved.tabs.length; i++){
//             //required \" to make URL (a href) work!
//             str.push(makeStr(['<div class="pure-u-1-3"><div class="fontSmall margMe"><div class="w3-card-2 innerPad"><div><h2>', tabSaved.tabs[i].title, '</h2>',
//             tabSaved.tabs[i].date,'</div>',urlStr,'</div></div></div>']));       //critical to have all <div>(s) in correct closing, as in opening     
//         }
//         // console.log('str', str);
//         str = str.reverse
//         document.getElementById('submitHere').innerHTML = str;
        
//         str="";
//     });
// }


var urlStr=""; var str=[];
function makeNice(){
    
    
    //========================================
    for(var i=0; i<retrieved.single.length; i++){
        //required \" to make URL (a href) work!
        str.push(makeStr(['<div class="pure-u-1-3"><div class="fontSmall margMe"><div class="w3-card-2 innerPad"><div><h2>', retrieved.single[i].title, '</h2>', retrieved.single[i].date,'</div>',urlStr,'</div></div>']));       //critical to have all <div>(s) in correct closing, as in opening     
        for(var j=0; j < retrieved.single[i].tabs.length; j++) {
            urlStr += makeStr(['<div>', retrieved.single[i].tabs[j].url,'</div>']);
            
        }
    }
    // console.log('str', str);
    str = str.reverse();
    document.getElementById('submitHere').innerHTML = str;
    
    str="";
}

//========================================

var tabToObj;
var singleNewTABGroup;
function makeObjects(){
    // try{
    //     pullBIG();
    // }catch(error){
    //     console.log('error', error);
    // }
    chrome.storage.sync.get(['tabSet'], (result)=>{
        tabToObj = result.tabSet;

        singleNewTABGroup = new SingleTABGroup(tabToObj['title'], tabToObj['tabs'], tabToObj['dateStr']);
        retrieved.add(singleNewTABGroup);
        retrieved.addToStorage();
    });

}

var saveBIGTAB; var retrieved;
function pullBIG(){
    //retrieved - main Variable to work with
    chrome.storage.sync.get(['BIGTAB'], (result)=>{
        saveBIGTAB = result.BIGTAB;
        console.log('result', result);
        console.log('saveBIGTAB', saveBIGTAB);
        retrieved = new BIGTAB();


        // retrieved.add(saveBIGTAB);
        for(var i=0; i<saveBIGTAB.length; i++){
            retrieved.add(saveBIGTAB[i]);
        }

        return saveBIGTAB;
    });


}




//========================================

//functions to print out HTML
// NEXT? - make functions for changing CSS





//========================================

function makeStr(arr){
    return arr.join('');
}

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}