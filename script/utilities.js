// add class to a element
function addClassToElement(elementID, whichClass) {
  const element = document.getElementById(elementID);
  element.classList.add(whichClass);
}

// show a element
function removeClassFromElement(elementID, whichClass) {
  const element = document.getElementById(elementID);
  element.classList.remove(whichClass);
}

//to access element innerText or value
function elementInnerValue(elementID) {
  const element = document.getElementById(elementID);
  const innerValue = element.innerText;
  return innerValue;
}

//to change element innerText or value
function changeElementInnerValue(elementID, changingValue) {
  const element = document.getElementById(elementID);
  element.innerText = changingValue;
}

// random generated alphabet
function keysGenerateRandomly() {
  // alphabets collection in array
  const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
  const alphabetCollection = alphabetStr.split("");
  // random number for access alphabetCollection by index
  const randomNumber = Math.random() * 26;
  const thisIndex = Math.round(randomNumber);
  //   get the alphabet
  const alphabet = alphabetCollection[thisIndex];
  return alphabet;
}
