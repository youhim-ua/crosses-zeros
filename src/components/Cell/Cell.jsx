import { useState, useEffect } from 'react';
import cross from '../../images/cross.svg';
import zero from '../../images/circle.svg';
import './styles.css';

const Cell = ({ step, changeStep, id, cleanBoard }) => {
  const [symbol, setSymbol] = useState(null);
  
  useEffect(() => {
    setSymbol(null);
  }, [cleanBoard]);
  
  const showSymbolHandler = () => {
    if (step) {
      setSymbol(cross)
    } else {
      setSymbol(zero)
    }
  }

  return (
    <button
      onClick={() => {
        changeStep(id);
        showSymbolHandler();
      }}
      className='cell'
      type='button'
      disabled={symbol}
    >
      {symbol && <img src={symbol} alt="symbol" />}
    </button>
  );
}

export default Cell;
