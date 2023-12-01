function squareDigits(num){
    return Number(num.toString().split("").map(numbre => Math.pow(numbre, 2)).join(""))
  };
  