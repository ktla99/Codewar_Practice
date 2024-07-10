function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    console.log(Math.sqrt(sq))
    if(Number.isInteger(Math.sqrt(sq)) === true) {
      return Math.pow((Math.sqrt(sq)+1), 2)
    } else {
      return -1
    }
  }