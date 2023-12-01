function flickSwitch(arr){
    let result = true;
    return arr.map((array) => {
      return (array === "flick") ? result = !result : result;
    })
  }