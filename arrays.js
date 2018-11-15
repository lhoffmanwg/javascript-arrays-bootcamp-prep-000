var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(originalArray, newElement){
  return [newElement,...originalArray];
}
function destructivelyAddElementToBeginningOfArray(originalArray, newElement) {
  originalArray.unshift(newElement);
  return originalArray;
}

function addElementToEndOfArray(originalArray, newElement) {
  return [...originalArray, newElement];
}

function destructivelyAddElementToEndOfArray(originalArray, newElement) {
  originalArray.push(newElement);
  return originalArray;
}

function accessElementInArray(originalArray, index) {
  return originalArray[index];
}

function destructivelyRemoveElementFromBeginningOfArray(originalArray)  {
  originalArray.shift();
  return originalArray;
}

function removeElementFromBeginningOfArray(originalArray) {
  return originalArray.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(originalArray) {
  originalArray.pop();
  return originalArray;
}

function removeElementFromEndOfArray(originalArray) {
  return originalArray.slice(0, originalArray.length-1)
}