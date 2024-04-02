function evalParentheses(parens) {
    const points = [];
    
    for (const paren of parens) {
      if (paren === '(') {
        points.push(0);
      } else {
        const levelPoints = points.pop() * 2 || 1;
        points.push((points.pop() || 0) + levelPoints);
      }
    }
    
    return points[0];
  }