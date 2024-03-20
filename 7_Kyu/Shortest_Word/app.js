function findShort(s){
    let arr = [];
    let count = 0;
    let split = s.split(" ");
    for(let i = 0; i < split.length; i++) {
      let countString = split[i].length
      arr.push(countString)
    }
    let sortArr = arr.sort((a, b) => a - b)
    console.log(sortArr)
    return sortArr[0]
  }