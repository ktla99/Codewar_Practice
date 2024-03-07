function gimmeTheLetters(sp) {
    let [start, end] = sp.split("-");
    let startValue = start.CharCodeAt(0);
    let endValue = end.CharCodeAt(0);
    let result = "";
    for(let i = startValue; i <= endValue; i++) {
        result += String.fromCharCode(i)
    }
    return result;
}

