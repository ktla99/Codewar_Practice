function strong(n) {
    function factorial(num) {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
        return result;
    }
    let string = n.toString().split('');
    let arr = [];
    for(let i = 0; i < string.length; i++) {
      arr.push(factorial(string[i]));
    }
    let math = 0;
    for(let i = 0; i < arr.length; i++) {
      math += arr[i]
    }
    if(math === n) {
      return "STRONG!!!!";
    } else {
      return "Not Strong !!";
    }
  }
  