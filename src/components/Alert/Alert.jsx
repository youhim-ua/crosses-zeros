import './styles.css';

const Alert = ({ reloadBoard, winCombination }) => {
  return (
    <div className='overlay'>
      <div className='alert'>
        {winCombination ? <p>Round! Great win!</p>
          : <p>Draw! Try once more.</p>}
        <button onClick={ reloadBoard } type='button'>Next round</button>
      </div>
    </div>
  );
}

export default Alert;
