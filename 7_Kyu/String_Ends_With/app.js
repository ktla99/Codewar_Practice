function solution(str, ending){
    for(let i = 0; i < str.length; i++) {
      if(str.endsWith(ending)) {
        return true
      } else {
        return false
      }
    }
  }