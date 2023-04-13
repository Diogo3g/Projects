// Convenience store change
function change(coins, item){
    let totalCoins = (coins[0] * 0.25) + (coins[1] * 0.10) +
    (coins[2] * 0.05) + (coins[3] * 0.01);
    let total = totalCoins - item;
    if (total > 0){
        return "You can buy this item with your coins!"
    } else {
        return "You can't buy this item, sorry :("
    }

};

console.log(change([10, 10, 10, 10], 4.2))

