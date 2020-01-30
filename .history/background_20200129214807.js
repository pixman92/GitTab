//file that saves Current tabs on open
//displays all tabs found in BIGTAB
//
//also, to allow for deleting in BIGTAB arr[]

var userBIG;
function makeOrGet(){
    try {

    } catch (error) {
        console.log('error', error);
    }
    if(pullBIG()==undefined){
        userBIG = new BIGTAB();
    }else{
        userBIG = pullBIG();
    }
}
