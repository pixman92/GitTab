function showBackground(){
    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}