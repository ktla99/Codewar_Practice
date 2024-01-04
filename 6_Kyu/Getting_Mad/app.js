function gettingMad(arr) {
    let minAbsDiff = [];
    arr.sort((a,b) => a -b);
    for(let i = 0; i < arr.length - 1; i++) {
        if(i < arr.length - 1) {
            minAbsDiff.push(Math.abs(arr[i] - arr[i+1]))
        }
    }
    return Math.min(...minAbsDiff);
}