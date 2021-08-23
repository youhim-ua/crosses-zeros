const winCombination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const checkWinner = (playerSteps) => {
  if (playerSteps.length > 2) {
    for (let i = 0; i < winCombination.length; i++) {
      const result = [];
      let winIndexes = null;
      for (let j = 0; j < playerSteps.length; j++) {
        const checkNumber = winCombination[i].includes(+playerSteps[j]);
        if (checkNumber) {
          result.push(true);
          winIndexes = winCombination[i];
        } else {
          result.push(false);
        };
      }
      
      const isWin = result.filter(item => item === true).length === 3;
      
      if (isWin) return winIndexes;
    }
  }
}

export default checkWinner;
