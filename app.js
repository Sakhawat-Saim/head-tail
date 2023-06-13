function computerMove() {
  const randomMove = Math.random();
  let coinFlipped = "";
  if (randomMove <= 1 / 2) {
    coinFlipped = "head";
  } else if (randomMove >= 1 / 2 && randomMove < 1) {
    coinFlipped = "tail";
  }
  return coinFlipped;
}

function playgame(playerGuess) {
  let result = "";
  const computerCoin = computerMove();
  if (playerGuess === "head") {
    if (computerCoin === "head") {
      result = "you win";
    } else {
      result = "you lose";
    }
  } else if (playerGuess === "tail") {
    if (computerCoin === "tail") {
      result = "You win";
    } else {
      result = "you lose";
    }
  }
  alert(
    `Your guess is ${playerGuess}. Coin flipped into ${computerCoin}. ${result}`
  );
}
