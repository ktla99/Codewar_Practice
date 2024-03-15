function XO(str) {
    let countOne = 0;
    let countTwo = 0;
    const lowerCase = str.toLowerCase();

    for(let i = 0; i < lowerCase.length; i++) {
        if(lowerCase[i] === "o") {
            countOne++;
        } else if(lowerCase[i] === "x") {
            countTwo++;
        }
    }
    return countOne === countTwo
}

// Calculate if all the X's matches the numbers of O's