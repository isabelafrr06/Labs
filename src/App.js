import logo from './assets/logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => setIsLoading(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a la aplicación de Isabela.
        </p>
        <Button
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? 'Loading' : 'Mi botón'}
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
