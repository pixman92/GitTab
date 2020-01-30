//file that saves Current tabs on open
//displays all tabs found in BIGTAB
//
//also, to allow for deleting in BIGTAB arr[]

var userBIG;
function makeOrGet(){
    try
    if(pullBIG()==undefined){
        userBIG = new BIGTAB();
    }else{
        userBIG = pullBIG();
    }
}
