function anagramDifference(w1, w2) {
    let w1String = w1.split("")
    let w2String = w2.split("")
    for(let i = 0; i < w1.length; i++) {
        if(w2String.includes(w1[i])) {
            w2String.splice(w2String.indexOf(w1[i]), 1)
            w1String.splice(w1String.indexOf(w1[i]), 1)
        }
    }
    return w1String.concat(w2String).length
}