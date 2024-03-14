function getMiddle(s) {
    let splitString = s.split("");
    let lastValue = splitString[splitString.length - 1]
    let firstValue = splitString[0]
    
    let findFirstIndex = splitString.indexOf(firstValue)
    let findLastIndex = splitString.lastIndexOf(lastValue)
    let indexNumber = findFirstIndex + findLastIndex
    
    let determineMidPoint = Number.isInteger(indexNumber / 2)
    let roundNumber = Math.ceil(indexNumber / 2)

    if(determineMidPoint === false) {
        return splitString[roundNumber - 1] + splitString[roundNumber]
    } else {
        return splitString[roundNumber]
    }
}