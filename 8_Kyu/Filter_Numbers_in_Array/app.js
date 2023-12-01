function filter_list(l) {
    let filter = [];
    for(let i = 0; i < l.length; i++) {
        if(typeof (l[i]) === "number") {
            filter.push(l[i]);
        }
    }
    return filter;
}