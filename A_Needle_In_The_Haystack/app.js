function findNeedle(haystack) {
    let findValue = (element) => element === "needle";
    let findIndex = haystack.findIndex(findValue);
    return `found the needle at position ${findIndex}`;
  }