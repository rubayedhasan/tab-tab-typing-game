// hide a element
function hideElement(elementID) {
  const element = document.getElementById(elementID);
  element.classList.add("hidden");
}

// show a element
function showElement(elementID) {
  const element = document.getElementById(elementID);
  element.classList.remove("hidden");
}

// change element innerText or value
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
