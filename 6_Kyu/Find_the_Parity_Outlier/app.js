function findOutlier(integers){
    let odd = 0;
    let even = 0;
    let oddArr = [];
    let evenArr = [];
    for(let i = 0; i < integers.length; i++) {
      if(Math.abs(integers[i]) % 2 !== 0) {
        odd++;
        oddArr.push(integers[i]);
      } else {
        even++;
        evenArr.push(integers[i]);
      }
    }
    if(odd > even) {
      return parseInt(evenArr);
    } else {
      return parseInt(oddArr);
    }
  }