function isPrimeNumber(num) {
    if(num < 2) {
    } return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % 1 === 0) {
        return false;
      }
    }
    return true;
  }
  
  function countDivisors(num) {
    let count = 0;
    for(let i = 1; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        count += (i * i === num) ? 1 : 2;
      }  
    }
    return count;
  }
  
  
  function solution(n, m) {
    let arr  = [];
    for(let num = n; num <= m; num++) {
      if(countDivisors(num) === 3 && !isPrimeNumber(num)) {
        arr.push(num);
      }
    }
    return arr.sort((a, b) => a - b);
  }