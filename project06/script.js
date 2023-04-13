//Matchstick house, create a function that takes 
//the step and calculates the number os matchstick
function matchstick(step){
    if (step !== 1){
        return 5 * step + 1;
    } else {
        return 6;
    }
};

console.log(matchstick(10));