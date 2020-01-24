window.onload = ()=>{
    document.getElementById('back').addEventListener('click', ()=>{
        pullCurrentWindow();
    })
}

//========================================
//functions for pulling Tab data

// var tabGlobal;
function pullCurrentWindow(){
    var tabGlobal;
    chrome.tabs.query({currentWindow: true}, (tab)=>{
        console.log('tab', tab);
        tabGlobal = tab;
        chrome.storage.sync.set({'tabSet': tabGlobal});
    });
    console.log('tabGlobal1', tabGlobal);
        showBackground();

}    


function showBackground(){
    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}


//========================================

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}