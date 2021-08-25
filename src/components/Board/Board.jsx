import { useState, useEffect } from 'react';
import Cell from '../Cell';
import underliningWinComb from '../../helpers/underliningWinComb';
import { ALL_STEPS } from '../../constant';
import './styles.css';


const Board = ({ savePlayerSteps, winCombination, cleanBoard }) => {
  const [step, setStep] = useState(true);

  useEffect(() => {
    setStep(true);
  }, [cleanBoard])

  const changeStep = (id) => {
    setStep((prevState) => !prevState);
    savePlayerSteps(id, step);
  }

  return (
    <div className='board'>
      <div className='horizontal-line1'></div>
      <div className='horizontal-line2'></div>
      <div className='vertical-line1'></div>
      <div className='vertical-line2'></div>

      {winCombination && underliningWinComb(winCombination)}

      {ALL_STEPS.map(id => (
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