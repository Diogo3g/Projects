//Check if an integer is divisible by five
function divisible(a){
    let b = a / 5;
    let c = (b - Math.floor(b));
    if (c > 0){
        return "Is not divisible by 5";
    } else {
        return "Is divisible by 5";
    }
};

console.log(divisible(15));