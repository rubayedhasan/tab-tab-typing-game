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
    const scoreField = document.getElementById("current-score");
    const scoreInText = scoreField.innerText;
    const score = parseInt(scoreInText);

    const newScore = score + 1;
    scoreField.innerText = newScore;

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
    const lifeField = document.getElementById("current-life");
    const lifeValueText = lifeField.innerText;
    const life = parseInt(lifeValueText);

    const newLife = life - 1;
    lifeField.innerText = newLife;

    // go to next round
    // continueRounds();
  }

  //end function
}
// event handler
document.addEventListener("keyup", eventForPressedKey);
