function solution(str){
    let arr = [];
    let toArr = str.split("");
    // console.log(str.length);
    if(toArr.length % 2 === 0) {
      for(let i = 0; i < toArr.length; i+=2) {
        arr.push(toArr[i] += toArr[i+1])
      } return arr
    } else {
      for(let i = 0; i < toArr.length; i+=2) {
        arr.push(toArr[i] += toArr[i+1])
    }
      // find last value in an odd array
      let lastValue = arr[arr.length-1];    
      // turn the last value into an array of its letters
      let splitValue = lastValue.split("");    
      // combine the first letter of the array with '_'
      let combineValue = splitValue[0] + "_";    
      // transform the new string into an array
      let changeToArr = combineValue.split();
      // remove the last word from the array 'arr'
      let removeLast = arr.pop();
      // combine the new array 'arr' and array 'changeToArr'
      let result = arr.concat(changeToArr)
      return result
    } 
  }

  /* function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}

*/

/* 
function solution(str){
   let result = []

   for (let i = 0; i < str.length; i += 2) {
     if (i < str.length - 1) {
       result.push(str[i] + str[i + 1])
     } else {
      result.push(str[i] + '_') 
     }
   }
   
   return result
}
*/