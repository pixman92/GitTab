
window.onload = ()=>{
    makeNice();
}




//========================================

//file reserved for opening & deleting of grouped TAB objects

var str="";
function makeNice(){
    if(!tabGlobal){
        alert('Error, undefined')
    }else{
        for(var i=0; i<tabGlobal.length; i++){
            str+=makeStr(["<div class='grid1'>", "<div>","<a href='", tabGlobal[i].url, tabGlobal[i].title, "</div>", "</div>" ]);
    
        }
        console.log('str', str);
        document.getElementById('placeHolder').innerHTML = str;

    }

    str="";

}



//========================================

function makeStr(arr){
    return arr.join("")
}