//file that saves Current tabs on open
//displays all tabs found in BIGTAB
//
//also, to allow for deleting in BIGTAB arr[]

function makeOrGet(){
    if(pullBIG()==undefined){
        replaceBIGTABInStorage(BIGTAB)
    }
}