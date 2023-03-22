/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
 
    if(s === " "){
        return true;
    }

    const stringArray = s.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, " ").toLowerCase();

   //loop to check if the outer and inner most elemnts are the same, if not return false

   for(let i = 0, j = stringArray.length - 1; i <= j; i++, j--){
        
        if(stringArray[i] !== stringArray[j]){
            return false;
        }
   }
   return true;

};

const test = isPalindrome("A man, a plan, a canal: Panama");
/*Quokka*/
test

/*Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplana c analpanama" is a palindrome.*/