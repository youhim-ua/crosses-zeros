const underliningWinComb = (array) => {
  let result;

  switch (array.join('')) {
    case '123':
      result = <div className='line1'></div>;
      break;
    
    case '456':
      result = <div className='line2'></div>;
      break;

    case '789':
      result = <div className='line3'></div>;
      break;
    
    case '147':
      result = <div className='line4'></div>;
      break;
    
    case '258':
      result = <div className='line5'></div>;
      break;
    
    case '369':
      result = <div className='line6'></div>;
      break;
    
    case '357':
      result = <div className='line7'></div>;
      break;

    case '159':
      result = <div className='line8'></div>;
      break;
  
    default:
      break;
  }

  return result;
}

export default underliningWinComb;