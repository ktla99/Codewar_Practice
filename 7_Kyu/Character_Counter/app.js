function validateWord(s) {
    s = s.toUpperCase().split('');
    let counts = [];
    let result = s.sort();

    // Put into the array the number of how many elements there are
    for(let i = 0; i < result.length; i++) {
      if(!counts[result[i]]) {
        counts[result[i]] = 1
      } else {
        counts[result[i]] +=1
      }
    }
    console.log(result)

    // Res is the number of copies there are of each element
    let res = Object.keys(counts).map((key) => counts[key])
    console.log(res)

    
    // Return true if number of all the elements are equal to the other
    return (res.filter(e => {
      return e === res[0];
    }).length === res.length)
  }