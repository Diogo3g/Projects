// if a seven appears in the array return "BOOM"
const sevenBoom = [1, 2, 3, 4, 5, 6, 7];

function contains(){
    const regex = new RegExp(7);
    if (regex.test(sevenBoom) === true){
        return "BOOM!"
    } else {
        return "There is no 7 in the array!"
    };
};

console.log(contains());


