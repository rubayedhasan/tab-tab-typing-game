// start the game
function startPlay() {
  // hide home screen & score board
  addClassToElement("home-screen", "hidden");
  addClassToElement("score-board", "hidden");
  //   visible playground
  removeClassFromElement("playground", "hidden");

  //   reset life
  changeElementInnerValue("current-life", 5);
  //   reset score
  changeElementInnerValue("current-score", 0);

  // dismiss background from previous wrong pressed key
  if (wrongKeyPressByPlayer) {
    removeClassFromElement(wrongKeyPressByPlayer, "dark:bg-red-500");
  }

  //   go to next round
  continueRounds();
}

// continue the game steps and show random alphabet
function continueRounds() {
  // random alphabet
  const newAlphabet = keysGenerateRandomly();
  // update alphabet to display
  changeElementInnerValue("key-display", newAlphabet);
  //  highlight the target key or new alphabet
  addClassToElement(newAlphabet, "dark:bg-orange-400");
  addClassToElement(newAlphabet, "font-extrabold");
}

// keyboard event to press key and continue the game
//   wrong key (pressed)
let wrongKeyPressByPlayer = null;

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

  //   over the game by pressing 'Escape'
  if (keyPressedByPlayer === "Escape") {
    gameOver();
  }

  // main condition::
  // if player press right key continue or press wrong lose ife and game over
  if (keyPressedByPlayer === targetKey) {
    // dismiss background from previous wrong pressed key
    if (wrongKeyPressByPlayer) {
      removeClassFromElement(wrongKeyPressByPlayer, "dark:bg-red-500");
    }

    // dismiss background from target key
    removeClassFromElement(keyPressedByPlayer, "dark:bg-orange-400");
    // remove weight from target key
    removeClassFromElement(keyPressedByPlayer, "font-extrabold");

    // increase player gaming score
    const previousScore = elementInnerNumberValue("current-score");
    const newScore = previousScore + 1;
    changeElementInnerValue("current-score", newScore);

    // display last increased score as final score after game over
    changeElementInnerValue("final-score", newScore);

    // go to next round
    continueRounds();
  } else {
    // dismiss background from  previous wrong pressed key
    if (wrongKeyPressByPlayer && wrongKeyPressByPlayer !== keyPressedByPlayer) {
      removeClassFromElement(wrongKeyPressByPlayer, "dark:bg-red-500");
    }

    // dismiss background from target key
    removeClassFromElement(targetKey, "dark:bg-orange-400");

    // Highlight wrong pressed key
    addClassToElement(keyPressedByPlayer, "dark:bg-red-500");
    wrongKeyPressByPlayer = keyPressedByPlayer;

    // reduce player gaming life
    const previousLife = elementInnerNumberValue("current-life");
    const newLife = previousLife - 1;
    changeElementInnerValue("current-life", newLife);

    // over the game
    if (newLife === 0) {
      gameOver();
    }
  }
}
// event handler
document.addEventListener("keyup", eventForPressedKey);

// end the game
function gameOver() {
  // hide home screen & playground
  addClassToElement("home-screen", "hidden");
  addClassToElement("playground", "hidden");
  //   visible score board
  removeClassFromElement("score-board", "hidden");
}
