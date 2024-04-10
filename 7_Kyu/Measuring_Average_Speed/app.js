function calculateSpeed(distance, time) {
    // m/s = 2.23694mi/hr
    let splitDistance = parseInt(distance);
    if (distance.includes('km')) splitDistance *= 1000;
    
    
    let splitTime = parseInt(time);
    if (time.includes('min')) splitTime *= 60;
    
  
    return Math.round((splitDistance / splitTime) * 2.23694) + 'mph';
  }