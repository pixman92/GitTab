
window.onload = ()=>{
    
//    receiveMessage();
}


//  function receiveMessage(){
//     chrome.runtime.onMessage.addListener(async (request, sender, response)=>{
//         console.log('sent', sender.tab);
//         console.log('response', response);

//         sendResponse("well done!");

//         return true;

//     });

// }



//========================================

//file reserved for opening & deleting of grouped TAB objects

var str="";
function makeNice(){

    chrome.storage.sync.get(['key'],


    for(var i=0; i<tabGlobal.length; i++){
        str+=makeStr(["<div class='grid1'>", "<div>","<a href='", tabGlobal[i].url, ">", tabGlobal[i].title, "</a>", "</div>", "</div>" ]);
        
    }
    console.log('str', str);
    document.getElementById('placeHolder').innerHTML = str;
    
    str="";

}



//========================================

function makeStr(arr){
    return arr.join("")
}

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}