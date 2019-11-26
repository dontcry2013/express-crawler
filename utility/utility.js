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

    static getCategory(age) {  
        var category = '';  
        switch (true) {  
        case isNaN(age):  
            category = 'not an age';  
            break;  
        case (age >= 50):  
            category = 'Old';  
            break;  
        case (age <= 20):  
            category = 'Baby';  
            break;  
        default:  
            category = 'Young';  
            break;  
        }
        return category;  
    }  

    static escapeHTML(text) {  
        var replacements= {'<': '&lt;', '>': '&gt;','&': '&amp;', '"': '&quot;'};                      
        return text.replace(/[<>&"]/g, function(character) {  
            return replacements[character];  
        });
    }
}

module.exports = Utility;