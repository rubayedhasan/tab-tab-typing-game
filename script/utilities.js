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
