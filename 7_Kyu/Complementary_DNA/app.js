function dnaStrand(dna){
    let arr = [];
    let convertToString = dna.split("");
    for(let i = 0; i< convertToString.length; i++) {
      if(convertToString[i] === "A") {
        arr.push("T")
      } else if(convertToString[i] === "T") {
        arr.push("A")
      } else if (convertToString[i] === "C") {
        arr.push("G")
      } else if (convertToString[i] === "G") {
        arr.push("C")
      }
    }
    return arr.join("")
  }