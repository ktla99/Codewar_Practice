function isIsogram(str) {
    // turn str to lowercase then split into an array then sort alphabetically
    str = str.toLowerCase().split("").sort();
    
    // for loop to determine if the letters starting at 0 is the same as the next letter
    for(let i = 0; i < str.length - 1; i ++) {
        if(str[i] == str[i + 1])
        // return false if the letters equal each other 
        return false;
    }
    // default is to return true
    return true;
}