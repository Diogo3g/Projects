// Tower of Hanoi
function towerHanoi(disks){
    let moves = Math.pow(2, disks) - 1;
    return moves;
};

console.log(towerHanoi(15));
