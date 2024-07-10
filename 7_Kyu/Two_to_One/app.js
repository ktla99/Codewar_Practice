function longest(s1, s2) {
    let sortOne = s1.split("").sort();
    let sortTwo = s2.split("").sort();
    let newArr = sortOne.concat(sortTwo).sort()
   
    let answer = [];
    newArr.forEach(e => {
      if(!answer.includes(e)) {
        answer.push(e)
      }
    });
    return answer.join("");
    }
  