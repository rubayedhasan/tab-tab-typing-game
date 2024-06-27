// start the game
function startPlay() {
  // hide home screen
  addClassToElement("home-screen", "hidden");
  //   visible playground
  removeClassFromElement("playground", "hidden");
  //   go to next round
  continueRounds();
}

// continue the game steps and show random alphabet
function continueRounds() {
  // random alphabet
  const newAlphabet = keysGenerateRandomly();
  // update alphabet to display
  changeElementInnerValue("key-display", newAlphabet);
  //  highlight the key
  addClassToElement(newAlphabet, "dark:bg-orange-400");
  addClassToElement(newAlphabet, "font-extrabold");
}

// keyboard event to press key and continue the game
// function to run the event
function eventForPressedKey(event) {
  // key press by player
  const keyPressedByPlayer = event.key;
  //   target key
  const targetKey = elementInnerValue("key-display").toLowerCase();

  //   start play by pressing 'Enter'
  if (keyPressedByPlayer === "Enter") {
    startPlay();
    return;
  }
  // main condition::
  // if player press right key continue or press wrong lose ife and game over
  if (keyPressedByPlayer === targetKey) {
    // remove key highlight
    removeClassFromElement(keyPressedByPlayer, "dark:bg-orange-400");
    removeClassFromElement(keyPressedByPlayer, "font-extrabold");
    // go to next round
    continueRounds();
  } else {
    // Highlight wrong pressed key
    addClassToElement(keyPressedByPlayer, "dark:bg-red-500");
  }

  //end function
}
// event handler
document.addEventListener("keyup", eventForPressedKey);
