function oddOrEven(array) {
    let newArr = [];
     for(let i = 0; i < array.length; i++) {
       newArr.push(Math.abs(array[i]))
     }
    let result = newArr.reduce((acc, curr) => {return acc + curr}, 0)
    console.log(result)
    console.log(result % 2)
    return result % 2 === 0 ? 'even' : 'odd';
  }