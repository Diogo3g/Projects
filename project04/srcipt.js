//Compare strings by number of characters
function comp(a, b){
    if (a.length === b.length){
        return true;
    } else {
        return false;
    }
};

console.log(comp("abcde", "cdefg"))
