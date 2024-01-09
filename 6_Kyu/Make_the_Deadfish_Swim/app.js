// Return the output array, and ignore all non-op characters
function parse( data ) {
    let arr = [], n = 0;
    for(let i = 0; i < data.length; i++) {
      data[i] === 'i' ? n++:
      data[i] === 'd' ? n--:
      data[i] === 's' ? n = Math.pow(n,2):
      data[i] === 'o' ? arr.push(n) : n
    } 
    return arr
  }