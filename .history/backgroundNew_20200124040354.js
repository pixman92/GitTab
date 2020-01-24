//file reserved for opening & deleting of grouped TAB objects

var str="";
function makeNice(){
    for(var i=0; i<tabGlobal.length; i++){
        str+=makeStr(["<div class='grid1'>", "<div>", tabGlobal[i].title, "</div>", "<div>", tabGlobal[i].url, "</div>", "</div>" ]);

    }
    console.log('str', str);
    document.getElementById('placeHolder').value = str;

    str="";

}



//========================================

function makeStr(arr){
    return arr.join("")
}