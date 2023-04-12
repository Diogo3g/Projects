/*Profit gamble function, if pro * prize >= pay
return true, else, false*/
function profit(prob, prize, pay){
    let gamble = (prob * prize >= pay)
    return gamble;
};

console.log(profit(0.9, 1, 2));