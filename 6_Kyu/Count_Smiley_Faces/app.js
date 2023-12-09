const countSmiley = smile => smile.reduce((a, b) =>
    a + /^[;:][-~]?[D)]$/.test(b), 0)