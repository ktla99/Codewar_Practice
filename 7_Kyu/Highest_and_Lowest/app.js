function highAndLow(numbers) {
    // numbers inputed are in a string such as "8 3 -5 42 -1 0 0 -9 4 7 4 -4"
    let splitValue = numbers.replaceAll(" ", ",");
    let toArray = splitValue.split(",");
    let sortValues = toArray.sort(function(a, b) {
        return a - b
    });
    let firstResult = sortValues[sortValues.length -1];
    let secondResult = sortValues[0];
    return firstResult + " " + secondResult
}