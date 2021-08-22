import { useState, useEffect } from 'react';
import Cell from '../Cell';
import underliningWinComb from '../../helpers/underliningWinComb';
import './styles.css';


const Board = ({ savePlayerSteps, cleanBoard, winCombination }) => {
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

      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='1'
      />
      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='2'
      />
      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='3'
      />
      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='4'
      />
      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='5'
      />
      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='6'
      />
      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='7'
      />
      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='8'
      />
      <Cell
        changeStep={ changeStep }
        step={step}
        cleanBoard={ cleanBoard }
        id='9'
      />
    </div>
  );
}

export default Board;
