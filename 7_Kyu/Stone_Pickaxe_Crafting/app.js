function stonePick(arr) {
    let com = 0;
    let stick = 0;
    for(let i of arr)
      {
        if(i == "Sticks"){
          stick++;
        }
        else if(i== "Cobblestone"){
         com++; 
        }
        else if(i == "Wood"){
          stick += 4;
        }
      }
  //   console.log("com",com,stick,parseInt(com/3))
    
    return Math.min(parseInt(com/3),parseInt(stick/2));
  }