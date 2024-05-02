function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort(function(a, b) {
      return a - b
    })
    console.log(numbers)
    return numbers[0] + numbers[1]
  }