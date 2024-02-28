function createPhoneNumber(number) {
    let format = (xxx) xxx-xxxx;
    for(let i = 0; i < number.length; i++) {
        format = format.replace("x", number[i])
    }
    return format;
}
