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
        tabGlobal.push(tab);
    });
    console.log('tabg', );

    if(!tabGlobal){
        wait(1700).then(()=>{
            pullCurrentWindow();
            showBackground();
        });
    }

}    


function showBackground(){
    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}


//========================================

function wait(timout){
    return new Promise(resolve=>setTimeout(resolve, timout));
}