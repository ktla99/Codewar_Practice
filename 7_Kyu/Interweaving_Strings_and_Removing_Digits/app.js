function interweave(s1, s2) {
    if (s1 + s2 === '') return '';
    let arr1 = s1.split('');
    let arr2 = s2.split('');
  
    for (let i = 0, j = 0; i < (s1+s2).length; i++) {
      if ((i + 1) % 2 === 0) {
        arr1.splice(i, 0, arr2[j]);
        j++;
      }
    }
    
    return  arr1.filter(i => {
      console.log(i, " - ", !parseInt(i) && i !== 0)
      return !parseInt(i) && parseInt(i) !== 0;
    }).join('');
  }