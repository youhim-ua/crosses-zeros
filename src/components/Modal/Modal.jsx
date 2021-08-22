import { useState } from 'react';
import './styles.css';

const Modal = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  }

  return (
    <div className='overlay'>
      <form
        id='player-name'
        onSubmit={
          (e) => {
            onSubmit(e);
            setUsername('');
          }
        }
      >
        <label htmlFor='name'>Enter your name</label>
        <input
          type='text'
          id='name'
          autoComplete='off'
          value={username}
          onChange={(e) => usernameHandler(e)}
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default Modal;
