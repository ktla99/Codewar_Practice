function descendingOrder(n) {
    if(n < 10) {
        return n
    } else {
        let splitString = n.toString().split("")
        let sortArray = splitString.sort(function(a, b) {
            return b - a
        });
        for(let i = 0; i < sortArray.length; i++) {
            if(sortArray[i] == sortArray[i+1]) {
                return parseInt(sortArray.join(""))
            } else {
                return parseInt(sortArray.join(""))
            }
        }
    }
}