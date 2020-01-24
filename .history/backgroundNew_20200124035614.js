//file reserved for opening & deleting of grouped TAB objects

function makeNice(){
    var str="";
    for(var i=0; i<tabGlobal.length; i++){
        str+=makeStr(["<div class='grid1'>", "<div>", tabGlobal[i].title, "</div>", "<div>", tabGlobal[i].url, "</div>", "</div>" ]);

    }


    str=""

}



//========================================

function makeStr(arr){
    return arr.join("")
}