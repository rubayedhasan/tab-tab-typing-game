// start the game
function startPlay() {
  // hide home screen
  hideElement("home-screen");
  //   visible playground
  showElement("playground");
}

// continue the game steps and show random alphabet
function continueRounds() {
  // random alphabet
  const newAlphabet = keysGenerateRandomly();
  // update alphabet to display
  changeElementInnerValue("key-display", newAlphabet);
  //   console.log(displayArea);
}

continueRounds();
