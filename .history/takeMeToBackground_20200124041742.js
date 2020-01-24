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

    if(!tabGlobal){
        wait(1700).then(()=>{
            makeNice();
        });
    }

    showBackground();
}    


function showBackground(){
    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}
