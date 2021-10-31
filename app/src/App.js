import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="museo.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acceder al Museo
        </a>
      </header>
    </div>
  );
}

export default App;
