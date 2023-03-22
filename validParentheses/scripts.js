
var isValid = function(s) {
    var stack = []
    if(s[0] != '(' && s[0] != '[' && s[0] != '{'){
        return false;
    }
    else{
        for(let i = 0; i < s.length; i++){
            if(s[i] == '('){
                stack.push(s[i])
                if(s[i + 1] != ')'){
                    return false;
                } else{
                    stack.pop();
                }
            }
            if(s[i] == '{'){
                stack.push(s[i])
                if(s[i + 1] != '}'){
                    return false;
                }else{
                    stack.pop();
                }       
                
            }
            if(s[i] == '['){
                stack.push(s[i])
                if(s[i + 1] != ']'){
                    return false;
                }else{
                    stack.pop();
                }   
            }
        }
    }

    return true;

};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("]]"));
