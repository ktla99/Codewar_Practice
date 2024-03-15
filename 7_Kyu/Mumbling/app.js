function accum(s) {
    let arr = [];
    // for loop to go through the numbers 
    for(let i = 0; i < s.length; i++) {
        let result = '';
        // for loop to return the first letter capitalize and other letters
        // stay lower cased 
        for(let j = 0; j < i + 1; j++) {
            result += j === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
        }
        arr.push(result);
        // push the letters either capitlized or not to the array 
        // console.log(arr) shows the result of the for loops
    }
    // connect the results with - 
    return arr.join('-');
}
 
/*
function accum(s) {
    return s.split('').map((s, idx) => s.toUpperCase() + s.toLowerCase().repeat(idx)).join('-')
}
*/