function naughtyOrNice(data) {
    let count = 0;
    for(let month in data) {
      Object.values(data[month]).forEach(value => {
        if(value === "Naughty") {
          count --;
        } else {
          count ++;
        }
      })
    } return count >= 0 ? "Nice!" : "Naughty!";
  }