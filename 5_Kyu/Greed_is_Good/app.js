function score(dice) {
    let arr = [];
    let score = 0;
    dice.join("").split("").forEach(element => 
        arr[element] = (arr[element] || 0) + 1);
}    