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
    })
    console.log('tabGlobal1', tabGlobal);

    if(!tabGlobal){
        wait(1700).then(()=>{
            if(tabGlobal){
                showBackground();
            }else{
                pullCurrentWindow();
            }
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