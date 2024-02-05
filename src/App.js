import logo from './logo.svg';
import './App.css';
import Panel from './components/panel/panel';
import Counter from './components/lifeCicle/lifeCicle';
import LoginControl from './components/logIn/login';
import DeckOfCards from './components/deck-of-cards/deck-of-cards';


function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginControl />        
        <Counter/>
        <Panel /> 
        <DeckOfCards />
      </header>
    </div>
  );
}

export default App;
