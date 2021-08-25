import { WIN_COMBINATION, ALL_STEPS } from '../constant';

const checkWinner = (playerSteps) => {
  if (playerSteps.length > 2) {
    for (let i = 0; i < WIN_COMBINATION.length; i++) {
      const result = [];
      let winIndexes = null;

      for (let j = 0; j < playerSteps.length; j++) {
        const checkNumber = WIN_COMBINATION[i].includes(playerSteps[j]);
        if (checkNumber) {
          result.push(checkNumber);
          winIndexes = WIN_COMBINATION[i];
        } else {
          result.push(checkNumber);
        };
      }

      const isWin = result.filter(item => item === true).length === 3;

      if (isWin) return winIndexes;
    }
  }
}

const isItDraws = (currentUserSteps, player1Steps, player2Steps) => {
  const unitedSteps = [...player1Steps, ...player2Steps];
  const stepsDoNotUse = ALL_STEPS.filter(step => !unitedSteps.includes(step))

  if (stepsDoNotUse.length < 3) {
    for (let k = 0; k < stepsDoNotUse.length; k++) {
      const notUsedStepsAddToUserSteps = [...currentUserSteps, stepsDoNotUse[k]];

      for (let i = 0; i < WIN_COMBINATION.length; i++) {
        const result = [];

        for (let j = 0; j < notUsedStepsAddToUserSteps.length; j++) {
          const checkNumber = WIN_COMBINATION[i].includes(notUsedStepsAddToUserSteps[j]);
          if (checkNumber) {
            result.push(checkNumber);
          } else {
            result.push(checkNumber);
          };
        }

        const isKeepGoing = result.filter(item => item === true).length === 3;
        
        if (isKeepGoing) return isKeepGoing;
      }
    }
  }
}

export {
  checkWinner,
  isItDraws
};
