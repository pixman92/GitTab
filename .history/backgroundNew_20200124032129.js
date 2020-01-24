//========================================
//functions for pulling Tab data

chrome.tabs.query({currentWindow: true}, (tab)=>{
    console.log('tab', tab);
    tabGlobal = tab;
});
