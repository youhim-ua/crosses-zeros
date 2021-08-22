import './styles.css';

const ScoreTable = ({ player1, player2 }) => {
  return (
    <>
      {player1.name && <div className='score-table'>
        <h2>Score</h2>
        <p>{player1.name} (x): {player1.wins}</p>
        {player2.name && <p>{player2.name} (o): {player2.wins}</p>}
      </div>}
    </>
  );
}

export default ScoreTable;
