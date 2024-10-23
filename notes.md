```javascript
function rockPaperScissors(input) {
  const random = Math.floor(Math.random() * 100);
  let opponentChoice;
  let outcome;
}
for (let i = 0; i <= random; i++) {
  if (i % 3 == 0) {
    opponentChoice = "rock";
  } else if (i % 2 == 0) {
    opponentChoice = "paper";
  } else {
    opponentChoice = "scissors";
  }
}

if (opponentChoice == "rock") {
  if (input == 1) {
    outcome = "win";
  } else if (input == 2) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
} else if (opponentChoice == "paper") {
  if (input == 2) {
    outcome = "win";
  } else if (input == 0) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
} else {
  if (input == 0) {
    outcome = "win";
  } else if (input == 1) {
    outcome = "lose";
  } else {
    outcome = "draw";
  }
}
```

The for loop is the iteration

```javascript

```

the if statements are the decision making (selection)
