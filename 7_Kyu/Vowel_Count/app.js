function vowelCount(str) {
    let count = 0;
    let vowels = ["a", "i", "o", "e", "u"];
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if(str[i] === vowels[j]) {
                count++;
            }
        }
    }
    return count;
}