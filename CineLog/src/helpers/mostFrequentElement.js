export function mostFrequentElement(arr) {
    if (arr.length === 0) {
      return null; // Return null if the array is empty
    }
  
    const elementCounts = {};
    let maxCount = 0;
    let mostFrequentElement = arr[0]; // Default to the first element
  
    arr.forEach(element => {
      elementCounts[element] = (elementCounts[element] || 0) + 1;
      if (elementCounts[element] > maxCount) {
        maxCount = elementCounts[element];
        mostFrequentElement = element;
      }
    });
  
    return mostFrequentElement;
  }
  