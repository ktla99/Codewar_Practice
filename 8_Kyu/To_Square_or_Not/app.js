function squareOrSquareRoot(array) {
    return array.map((value => {
      if((Number.isInteger(Math.sqrt(value, 2)) === true)) {
        return Math.sqrt(value, 2);
      } else {
        return value * value;
      } 
      }
    ))
  }