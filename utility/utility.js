class Utility{

    static removeDuplicate(arr){
        if(!Array.isArray(arr)){
            return -1;
        }
        var set = new Set(arr);
        return [...set];
    }

    /**
     * Checks to see if a value is set.
     *
     * @param {Function} accessor Function that returns our value
     */
    static isset (accessor) {
        try {
            // Note we're seeing if the returned value of our function is not
            // undefined
            return typeof accessor() !== 'undefined';
        } catch (e) {
            // And we're able to catch the Error it would normally throw for
            // referencing a property of undefined
            return false;
        }
    }

}

module.exports = Utility;