// this file??
// triggered by script.js, maybe??



let BIGArrayOfBranches=[];
// var db = firebase.database();



window.onload = (()=>{


});
//     console.log('printed before', BIGArrayOfBranches);
//     // initBIGArray();
//     // localGetBigArray();
//     console.log('printed after', BIGArrayOfBranches);
    
    
//     //========================================

//     // omnibox commands, save to variable, global
//     chrome.omnibox.onInputEntered.addListener(function(text) {
//         // alert('You just typed "' + text + '"');
//         textGlobal = text;
//         console.log(text);
//         runCommands();
//         localSaveBigArray();
//     });


//     //chrome background.js listeners, on create and on remove
//     chrome.tabs.onRemoved.addListener((tab)=>{
//         console.log('removed');
//         saveTabs(()=>{
//             console.log("I ran: removed");
//         });
//     });


//     chrome.tabs.onCreated.addListener((tab)=>{
//         console.log('added');
//         saveTabs(()=>{
//             console.log("I ran: added" );
//         });
//     });


//         chrome.tabs.onUpdated.addListener((tab,info)=>{
//             if(info.status === 'complete' ){
//                 console.log('updated');
//                 saveTabs(()=>{
//                     console.log("I ran: updated" );
//                 });
    
//             }
//         });

// });








// ================================
let picked = false, nameOfCurrentBranch ="", newBranchName="";
function runCommands(){
    
    //omni box command line stuff

    // typed commit -m <message>
    // saveTabs
    // replace old tabs with currentWindow's tabs
    // 
    if(textGlobal.substring(0,6)=="commit"){
        console.log('picked', picked);
        if(picked===false){
            // console.log('picked false');
            alert("Please checkout before commit");
        }else {
            console.log('else ran');
            let msg = textGlobal.substring(7, textGlobal.length);
            console.log("msg...", msg);
            commitToBranch(nameOfCurrentBranch, msg.toString()); 

            // Saves tabs. Searches for branchName. Resets tabsArray. Repopulates it with savedTabs, from saveTabs() function
            saveTabs(()=>{
                if(searchForUsedBranchName(nameOfCurrentBranch)=="found"){
                    findNameInArray(nameOfCurrentBranch);
                    BIGArrayOfBranches[pos].tabsArray = [];
                    if(arrayLevel2[0].length!=0){
                        for(let i=0; i<arrayLevel2[0].length; i++){
                            BIGArrayOfBranches[pos].tabsArray[i] = arrayLevel2[0][i][1];
                            BIGArrayOfBranches[pos].tabsTitles[i] = arrayLevel2[0][i][0];
        
                        }
                        
                    }else{
                        alert('Please Refresh Page');
                    }
                    
                }else{
                    alert("Try checkout -b <branchName>");
                }
                // localSaveBigArray();  
                // localSaveCurrentBranchName();
                // alert("Commit saved.");
            });
            
            localSaveBigArray();  
            localSaveCurrentBranchName();
            alert("Commit saved.");
            
        }
        
    }

    //========================================
    // if checkout is typed
    // switch that to new Branch
    // open all tabs from branch
    if(textGlobal.substring(0,8) =="checkout" && textGlobal.substring(9, 11)!="-b"){
        let branchName = textGlobal.substring(9, textGlobal.length);

        // localGetBigArray();

        if(searchForUsedBranchName(branchName)=='found'){
            nameOfCurrentBranch = branchName;
            alert("You selected, "+nameOfCurrentBranch+", Branch");
            picked=true;
            localSaveCurrentBranchName();
            createWindow();
        }else{
            nameOfCurrentBranch = "";
            alert('No Branch found by that name.\nTry \'checkout -b <newName>\'');
            picked=false;
        }

    }

    //========================================

    // if(textGlobal.substring(0,7)=="current")
    
    //========================================
    // if checkout -b <branchName> is typed
    // create branch, in Obj
    // store Obj in BIGArrayOfBranches
    if(textGlobal.substring(0,11)=="checkout -b"){
        let newBranchName = textGlobal.substring(12, textGlobal.length)
        console.log("newBranchName", newBranchName);



        if(newBranchName==""){
            alert("Please type name.");
        }else {
            if(searchForUsedBranchName(newBranchName) == 'found'){
                if(confirm("Branch name already in use. Switch to \""+ newBranchName + "\" branch?")){
                    branchSwitch(newBranchName);
                    picked=true;
                    nameOfCurrentBranch = newBranchName;
                    localSaveCurrentBranchName();
                    console.log("switching!")
                }
            }else{
                createBranch(newBranchName);
                // if(arrayLevel2!=0){
                //     branchPushToArray();
                    picked=true;
                    nameOfCurrentBranch = newBranchName;
                    console.log('creating!');
                    alert("Created new Branch, named: "+ nameOfCurrentBranch);
                    localSaveBigArray();
                    localSaveCurrentBranchName();

                }
            }
            
        }

            console.log(newBranchName);
    //========================================
    if(textGlobal == "current"){
        
        if(localGetCurrentBranchName()!=undefined){
            alert("Current Branch: "+ localGetCurrentBranchName());
        }else{
            alert("No Branch selected\nTry checkout <branchName>");
            
        }
    }
    
    //========================================
    // status page, popup
    // all recorded data
    if(textGlobal=="status"){
        console.log('hello Status page');
        chrome.tabs.create({url: "saved.html"});
    }

    // if(textGlobal == "open" && picked==true){
    //     createWindow();
    // }



}
//===============================================
class Branch{
    constructor(name, tabsTitles, tabsArray, commits){
        this.name = name;
        this.tabsTitles = tabsTitles;
        this.tabsArray = tabsArray;
        this.commits = commits;
    }

}

//========================================

// ===================================================
let arrayLevel2 = [];
let arrayLevel1 = [];
let tabGlobal;
function saveTabs(callback){
    //saves tab data to array

    arrayLevel2 = [];
    arrayLevel1 = [];

    // addTextToArray();   //function call to add text to array

    let ii=0;
    chrome.tabs.query({currentWindow: true}, (tab)=>{
        console.log('tab', tab);
        tabGlobal = tab;
        // console.log(tabGlobal[i].title + "\n" +tabGlobal[i].url+"\n\n");
        // arrayLevel2[i]= arrayLevel1;
        // console.log('arrayLevel2', arrayLevel2);
        
        for(let i=0; i<tabGlobal.length;i++){
            //statement that weeds out "chrome://newtab/"
            if(tabGlobal[i].url != "chrome://newtab/"){
                arrayLevel1.push([tabGlobal[i].title, tabGlobal[i].url]);
                // console.log('arrayLevel1', arrayLevel1);

            }

        }
        arrayLevel2.push(arrayLevel1);
        //For retrieving data
        //arrayLevel2[0][0][0] - from 0 tier, to 0th array, to 0th element in that array
        callback();
    });

}