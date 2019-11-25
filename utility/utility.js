class Utility{

    static removeDuplicate(arr){
        if(!Array.isArray(arr)){
            return -1;
        }
        var set = new Set(arr);
        return [...set];
    }
    

}

module.exports = Utility;