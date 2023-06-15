function resetScore() {
  score.win = 0;
  score.loss = 0;
}
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = {
    win: 0,
    loss: 0,
  };
}

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
      result = "you win";
    } else {
      result = "you lose";
    }
  }
  if (result === "you win") {
    score.win += 1;
  } else if (result === "you lose") {
    score.loss += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  alert(
    `Your guess is ${playerGuess}. Coin flipped into ${computerCoin}. ${result}
    win: ${score.win} loss: ${score.loss}`
  );
}
