window.onload = ()=>{
    document.getElementById('back').addEventListener('click', ()=>{
        pullCurrentWindow();
    })
}

//========================================
//functions for pulling Tab data

var tabGlobal;
function pullCurrentWindow(){
    chrome.tabs.query({currentWindow: true}, (tab)=>{
        console.log('tab', tab);
        tabGlobal = tab;
    });
    console.log('tabGlobal1', tabGlobal);
    
    
    chrome.runtime.sendMessage({data}, function(response) {
        console.log(response.farewell);
      });

}    


function showBackground(){
    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}


//========================================

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}