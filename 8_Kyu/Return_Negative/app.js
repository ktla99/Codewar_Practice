function makeNegative(num) {
    console.log(typeof num)
    return (num === 0) ? 0 : - Math.abs(num);
  }