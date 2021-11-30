import './App.css';
import Left from './components/left'
import Right from './components/right';

function App() {
  return (
    <div>
      <div className="Header">
        <h1>React PHP CRUD opertion</h1>
      </div>
      <div className="homepage-container">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
