function latestClock(a, b, c, d) {
    let numbers = [a, b, c, d];
    const removeNumbers = function(num, arr) {
        let removal = arr.slice();
        const index = arr.indexOf(num);
        removal.splice(index, 1);
        return removal;
    }

    const valueOneMax = ((arr) => {
        const biggerThanFive = arr.filter(n => n > 5);
        return biggerThanFive.length === 2 ? 1 : 2;
    })(digits);

    const valueOne = Math.max(...numbers.filter(number => number <= valueOneMax));
    numbers = removeNumbers(valueOne, digits);

    const valueTwoMax = valueOne === 2 ? 3 : 9;
    const valueTwo = Math.max(...numbers.filter(number => number <= valueTwoMax));
    numbers = removeNumbers(valueTwo, numbers);

    const valueThreeMax = 5;
    const valueThree = Math.max(...numbers.filter(number => number <= valueThreeMax));
    numbers = removeNumbers(valueThree, numbers);

    const valueFour = numbers[0];
    
    return `${valueOne}${valueTwo}:${valueThree}${valueFour}`

}


/* function latestClock(a, b, c, d) {
    let digits = [a, b, c, d];
    
    const removeDigit = function(num, arr) {
      let res = arr.slice();
      const idx = arr.indexOf(num); 
      res.splice(idx, 1);
      return res;
    }
    
    // max HH:MM === 23:59
    // if there are two digits bigger than 5, than max MM:HH === 19:59
  
    const maxH1 = ((arr) => {
      const biggerThan5 = arr.filter(n => n > 5);
      return biggerThan5.length === 2 ? 1 : 2;
    })(digits);
    
    const h1 = Math.max(...digits.filter(digit => digit <= maxH1));
    digits = removeDigit(h1, digits);
    
    const maxH2 = h1 === 2 ? 3 : 9;
    const h2 = Math.max(...digits.filter(digit => digit <= maxH2));
    digits = removeDigit(h2, digits);
    
    const maxM1 = 5;
    const m1 = Math.max(...digits.filter(digit => digit <= maxM1));
    digits = removeDigit(m1, digits);
    
    const m2 = digits[0];
  
    return `${h1}${h2}:${m1}${m2}`;
  }
  */