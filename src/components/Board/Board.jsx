import { useState, useEffect } from 'react';
import Cell from '../Cell';
import underliningWinComb from '../../helpers/underliningWinComb';
import './styles.css';


const Board = ({ savePlayerSteps, winCombination, draws }) => {
  const [step, setStep] = useState(true);

  const [cleanBoard, setCleanBoard] = useState(false);

  useEffect(() => {
    setStep(true);
    setCleanBoard(false);
    
    if (winCombination) {
      alert('Round! Great win!');
      setCleanBoard(true);
    }
    
    if (draws) {
      alert('Draws! Try once more.');
      setCleanBoard(true);
    }
  }, [winCombination, draws])

  const changeStep = (id) => {
    setStep((prevState) => !prevState);
    savePlayerSteps(id, step);
  }

  const cellsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='board'>
      <div className='horizontal-line1'></div>
      <div className='horizontal-line2'></div>
      <div className='vertical-line1'></div>
      <div className='vertical-line2'></div>

      {winCombination && underliningWinComb(winCombination)}

      {cellsIds.map(id => (
        <Cell
          changeStep={ changeStep }
          step={step}
          cleanBoard={ cleanBoard }
          id={id}
          key={id}
        />
      ))}
    </div>
  );
}

export default Board;