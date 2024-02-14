function multiply(number){
    let calculateDigit = Math.abs(number).toString().length;
    let multiplyDigits = number * Math.pow(5, calculateDigit);
    return multiplyDigits;
}