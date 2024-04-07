function hexColor(codes){
    console.log(codes)
    const coArr = codes.split(" ");
  
    if(Number(coArr[0]) > Number(coArr[1]) && Number(coArr[0]) > Number(coArr[2])) {
      return 'red';
    }
    else if(Number(coArr[1]) > Number(coArr[0]) && Number(coArr[1]) > Number(coArr[2])) {
      return 'green';
    }
    else if(Number(coArr[2]) > Number(coArr[0]) && Number(coArr[2]) > Number(coArr[1])) {
      return 'blue';
    }
    
    else if(Number(coArr[0]) === 0 && Number(coArr[1]) === 0 && Number(coArr[2]) === 0) {
    return 'black';
    }
    else if(Number(coArr[0]) === Number(coArr[1]) && Number(coArr[2]) === Number(coArr[1])) {
      return 'white';
    }
     else if(Number(coArr[0]) === Number(coArr[1])) {
      return 'yellow';
    }
    else if(Number(coArr[1]) === Number(coArr[2])) {
      return 'cyan';
    }
    else if(Number(coArr[0]) === Number(coArr[2])) {
    return 'magenta'; 
    }
    else if(codes === "") {
      return 'black';
    }
  }