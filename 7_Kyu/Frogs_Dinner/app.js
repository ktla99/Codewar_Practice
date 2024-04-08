//Return the string in the description with the number of flies eaten for each frog.
function frogContest(n) {
    const chris = (n * (n + 1)) / 2;
    const tom = Math.floor(chris / 2) * (Math.floor(chris / 2) + 1) / 2;
    const cat = (chris + tom) * ((chris + tom) + 1) / 2;
  
    return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`
}


/* this function is too repetitive and long
function frogContest(n) {
  let chris = [];
  let tom = [];
  let cat = [];
  for(let i = 1; i < n + 1; i++) {
    chris.push(i)
  }

  chris = chris.reduce((acc, curr) => acc + curr, 0,)
  console.log(chris)
  
  let tomInitial = Math.floor(chris / 2);
  for(let i = 1; i < tomInitial + 1; i++) {
    tom.push(i)
  }
  
  tom = tom.reduce((acc, curr) => acc + curr, 0,)
  console.log(tom)
  
  let catInitial = chris + tom
  for(let i = 1; i < catInitial + 1; i++) {
    cat.push(i)
  }
  cat = cat.reduce((acc, curr) => acc + curr, 0,)
  
  return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${cat} flies`
}
*/