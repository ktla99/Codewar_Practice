function positiveSum(arr) {
    return arr.reduce((arr, c) => {
        if(c > 0) acc += c;
        return acc;
    }, 0); // 0 is the initial value
}