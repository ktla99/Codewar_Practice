function isValidWalk(walk) {
    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;
    let checkLength = ""
    let returnToStart = ""
    
    for(let i = 0; i < walk.length; i++) {
      if(walk[i] === "n") {
        north++
      } else if(walk[i] === "s") {
        south++
      } else if(walk[i] === "e") {
        east++
      } else {
        west++
      }
    }
    
    
    // console.log(north + south)
    // console.log(east + west)
    // console.log(north)
    // console.log(south)
    // console.log(east)
    // console.log(west)
    
    // walk too short or long
    if(((north + south === 10) || (east + west === 10)) || (north + south + east + west === 10)) {
      checkLength = "true"
    } else {
      checkLength = "false"
    }
    
    
    // walk goes back to the start
    if((north === south) && (east === west)) {
      returnToStart = "true"
    } else {
      returnToStart = "false"
    }
    
    // console.log(checkLength)
    // console.log(returnToStart)
    
    
    if((checkLength === "true") && (returnToStart === "true")) {
      return true
    } else {
      return false
    }
  }