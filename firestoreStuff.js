
firebase.initializeApp(config);
let db = firebase.firestore();
    

// savedArrayBIG is the source of data
// it has commits, name, tabsArray, tabsTitles
// commits - array of 'text' and 'date'
// name - text
// tabsArray - multidem arrays, consisting of a single URL
// tabsTitles - title arrays


//========================================
// let objOfName = {};
// let objOfURLS = {};
// let objOfTitles = {};
// let objCollective = {};
// function convertToGitTabs(passed) {
//     //function that spoofs no array allowed rule in Firestore
//     //call each time with incrementing 'passed' paramter


//     // for (var i = 0; i <= stuff.length; i++) {
//     //     for (var ii = 0; ii <= stuff[0].tabsArray.length; ii++) {
//     //         objForFirestore[i] = stuff[0].tabsArray[ii];
//     //     }
//     // }
//     let ii=0;
//     // for (var i = 0; i < BIGArrayOfBranches.length; i++) {
//         // 1st operation
//         // make name for OBJ{} passed to Firestore
//         objOfName[0] = {branchName: BIGArrayOfBranches[passed].name};

//         // 2nd loop through all URLS in URL array. Then store to obj
//         for (var posForTabs = 0; posForTabs < BIGArrayOfBranches[passed].tabsArray.length; posForTabs++) {
//             objOfURLS[posForTabs] = {URL: BIGArrayOfBranches[passed].tabsArray[posForTabs]};
//         }
        
//         // 3rd operation: loop through TITLEs array
//         for (var posForTabs = 0; posForTabs < BIGArrayOfBranches[passed].tabsArray.length; posForTabs++) {
//             objOfTitles[posForTabs] = {Title: BIGArrayOfBranches[passed].tabsTitles[posForTabs]};
//         }
//         // objForFirestore[ii++]
//         // ii++;
//     // }


//     objCollective[0] = objOfName;
//     objCollective[1] = objOfURLS;
//     objCollective[2] = objOfTitles;


//     // objForFirestore[0] = {branchName: 'lovely'};
//     // objForFirestore[1] = {tabsArray: {0:"google.com", 1:"facebook.com"}};
//     // objForFirestore[2] = {tabsTitles: {0:"Google", 1:"FB"}};

//     // createGit('tim@gmail.com', objForFirestore);
// }

// function createGit(email, obj) {
//     //sends spoofed 'array' data to Firestore
//     let ref = db.collection('users').doc(email).collection('saved').doc();

//     ref.set({
//         obj,
//     });
// }
//========================================

// let savedIds = [];
// function pullFromFirestore(email) {
//     // pulls all 'data' (stuff) from a single user's email, from Firestore
//     let ref = db.collection('users').doc(email).collection('saved');

//     ref.get().then(snapshot =>{
//         snapshot.forEach(doc =>{
//         console.log(doc.id);
//         savedIds.push(doc.id);
//         // callback();
//         //========================================
//         // part II of this function
//         pulledFromUser = [];
//         for (var i = 0; i < savedIds.length; i++) {
//             let refUsing = db.collection('users').doc(email).collection('saved').doc(savedIds[i]);
    
    
//             refUsing.get().then((doc)=>{
//                 console.log('doc', doc.data());
//                 pulledFromUser.push(doc.data());
//             });
//         }   
//     })});


// }

function pullAndPortToBIGArray() {
    //funciton taking in OBJ retrieved from Firestore
    //using this function to populate the Branch class

    for (var i = 0; i < pulledFromUser[0].obj[1][0].URL   .length; i++) {
        pulledFromUser[0].obj[1][0].URL   [i]
    }
    pulledFromUser[0].obj[1][0].URL   
}

//========================================
// function token() {
//     chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
//         // Use the token.
//       });
// }

// // callback = function (error, httpStatus, responseText);
// function authenticatedXhr(method, url, callback) {
//     var retry = true;
//     function getTokenAndXhr() {
//       chrome.identity.getAuthToken({/* details */},
//                                    function (access_token) {
//         if (chrome.runtime.lastError) {
//           callback(chrome.runtime.lastError);
//           return;
//         }
  
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.setRequestHeader('Authorization',
//                              'Bearer ' + access_token);
  
//         xhr.onload = function () {
//           if (this.status === 401 && retry) {
//             // This status may indicate that the cached
//             // access token was invalid. Retry once with
//             // a fresh token.
//             retry = false;
//             chrome.identity.removeCachedAuthToken(
//                 { 'token': access_token },
//                 getTokenAndXhr);
//             return;
//           }
  
//           callback(null, this.status, this.responseText);
//         }
//       });
//     }
//   }
  
let userMe;
function loginProvider1(){
    var provider = new firebase.auth.GoogleAuthProvider();

    provider.addScope('email');


    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log('user', user);
        userMe = user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.log('error', errorCode, errorMessage);
        // ...
      });

}



function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}


//========================================
function run(passed){
    if(passed == 'login'){
        loginProvider1();
    }
    if(passed == "logout"){
        logout();
    }
    if(passed == "save"){

    }
}
//========================================
// functions from backgorund.html(data) to Firestore(data - cloud data)

var objOfURLS={};
function makeURLS(){
    //make OBJ and return it, of URLS
    objOfURLS = {};
    for(let i=0; i<savedArrayBIG[0].tabsArray.length; i++){
        objOfURLS[i]= {URL: savedArrayBIG[0].tabsArray[i]};
        
    }
    // console.log(objOfURLS);
    return(objOfURLS);

}

function pushToFirebaseAllElements(email = "tim@gmail.com"){
    // takes Array data, pulls from OBJ making function
    // then pushes OBJ to savedUniqueID
    let ref = db.collection('users').doc(email).collection('saved').doc();
     
    // uses makeURLS() function to make URL objects
    ref.set(makeURLS());
    
  }







  
var savedIds = [];
function pullFromFirestore(email = "tim@gmail.com", callback) {
  savedIds = [];
    // pulls all 'data' (stuff) from a single user's email, from Firestore
  var db = firebase.firestore();
  let ref = db.collection('users').doc(email).collection('saved');

  
   ref.get().then(snapshot =>{
        snapshot.forEach(doc =>{
        console.log(doc.id);
        savedIds.push(doc.id);
        });
     callback();
   });
  return (savedIds);
}


//========================================
var commitsArray, myName, URLS, titles, gitTabObj;
window.onload = (()=>{
    localGetBigArrayForSavedPage(()=>{
        commitsArray = savedArrayBIG[0].commits;
        myName = savedArrayBIG[0].name;
    
    
        URLS = savedArrayBIG[0].tabsArray;
        titles = savedArrayBIG[0].tabsTitles;
        
        gitTabObj = {};
        
    });
    // console.log('array ', savedArrayBIG);

});


var titleObj = {};
function makeTitle(){
  titleObj[0] = {title: myName};
}
// ========================================

var totalCommitsObjs = {};
function myCommits(){
  for(var i=0; i<commitsArray.length;i++){
    for(var ii=0; ii<2; ii++){
       totalCommitsObjs[i] = {text: commitsArray[ii][0], date: commitsArray[ii][1]};   
    }
  }
}


// ========================================

var tabURLS = {};
function myURLS(){
  for(var i=0; i<URLS.length; i++){
    tabURLS[i] = {URL: URLS[i]};
  }
}

var tabTitles = {};
function myTitles(){
  for(var i=0; i<titles.length; i++){
    tabTitles[i] = {title: titles[i]};
  }
}


// =========================================
function make(){
    
    myCommits();
    myURLS();
    myTitles();
    makeTitle();   
    gitTabObj[0] = titleObj;
    gitTabObj[1] = totalCommitsObjs;
    gitTabObj[2] = tabURLS;
    gitTabObj[3] = tabTitles;
  // });

  
  console.log("gitTabObj", gitTabObj);
}

//========================================
// let db = firebase.firestore();
function addData(email, data){
    let ref = db.ref("/users/"+email).push({
        item: data,
    });
}