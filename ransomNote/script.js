
var canConstruct = function(ransomNote, magazine) {
    
    //makes magazine string into an array
    const arr = magazine.split('');
    // goes through each character of ransom note
    for (let i = 0; i < ransomNote.length; i++) {
        // checks each chracter of ransom note to see if it's in the string array magazine
        // if it's not there, indexOf returns -1. therefore we have an odd char and can return false
        if (arr.indexOf(ransomNote[i]) === -1) {
            return false;
        // else we remove that char from the array, removes 1 element at the indexOf location (index of, 1 element)
        } else {
            arr.splice(arr.indexOf(ransomNote[i]), 1);
        }
    }
    //if we get through all operations we can create the ransomeNote from the magazine string.

    return true;

};


console.log(canConstruct("aa", "aab"));




