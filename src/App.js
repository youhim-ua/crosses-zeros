import { useState, useEffect } from 'react';
import Container from './components/Container';
import Board from './components/Board';
import ScoreTable from './components/ScoreTable';
import Modal from './components/Modal';
import checkWinner from './helpers/findWinner';
import './App.css';

const App = () => {
  const [player1, setPlayer1] = useState({
    name: null,
    wins: 0,
    currentSteps: []
  });

  const [player2, setPlayer2] = useState({
    name: null,
    wins: 0,
    currentSteps: []
  });

  const [showModal, setShowModal] = useState(true);

  const [winCombination, setWinCombination] = useState(null);
  
  const [draws, setDraws] = useState(false);

  useEffect(() => {
    const isPlayer1Winner = checkWinner(player1.currentSteps);
    const isPlayer2Winner = checkWinner(player2.currentSteps);

    if (!isPlayer1Winner && player1.currentSteps.length === 5) {
      setPlayer1((prevState) => ({ ...prevState, currentSteps: [] }));
      setPlayer2((prevState) => ({ ...prevState, currentSteps: [] }));
      setDraws(true);
      return;
    }

    if (isPlayer1Winner) {
      setPlayer1((prevState) => ({ ...prevState, currentSteps: [], wins: prevState.wins + 1 }));
      setPlayer2((prevState) => ({ ...prevState, currentSteps: [] }));
      setWinCombination(isPlayer1Winner);
      return;
    }
    
    if (isPlayer2Winner) {
      setPlayer2((prevState) => ({ ...prevState, currentSteps: [], wins: prevState.wins + 1 }));
      setPlayer1((prevState) => ({ ...prevState, currentSteps: [] }));
      setWinCombination(isPlayer2Winner);
      return;
    }

    setDraws(false);
    setWinCombination(null);
  }, [player1.currentSteps, player2.currentSteps, player1.name, player2.name]);

  const getNamesHandler = (e) => {
    e.preventDefault(e);
    const name = e.target.name.value;

    if (!name) {
      alert('Please, enter your name!');
      return;
    } else if (name === player1.name) {
      alert('Choose, another name!');
      return;
    };

    if (!player1.name) {
      setPlayer1((prevState) => ({ ...prevState, name }));
      return;
    }

    setPlayer2((prevState) => ({ ...prevState, name }));

    setShowModal(false);
  }

  const savePlayerSteps = (id, whoMadeStep) => {
    if (whoMadeStep) {
      setPlayer1((prevState) => ({ ...prevState, currentSteps: [...prevState.currentSteps, id] }));
    } else { 
      setPlayer2((prevState) => ({ ...prevState, currentSteps: [...prevState.currentSteps, id] }));
    }
  }

  return (
    <Container>
      <Board
        savePlayerSteps={ savePlayerSteps }
        winCombination={winCombination}
        draws={ draws }
      />
      <ScoreTable 
        player1={ player1 }
        player2={ player2 }
      />
      {showModal &&
        <Modal
          onSubmit={ getNamesHandler }
        />
      }
    </Container>
  );
}

export default App;
