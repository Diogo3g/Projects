let num = 10;
function evenNum(num){
    let division = (num - Math.floor(num)) !== 0; 
    if (division === false){
        return "Even Number"
    } else {
        return "Odd Number"
    };

};
console.log(evenNum(num));