import logo from './logo.svg';
import './App.scss';
import KeyBoard from './Key-Board/KeyBoard';
import BubbleBackground from './BubbleBackground/BubbleBackground';
import background from './Assets/heineken.jpg';

function App() {
  return (
    <div className='App-container'>
      <BubbleBackground></BubbleBackground>
      <div className='App-content'>
        <div className="App">
          <header className="App-header">
            <span className="App-title">React Test</span>
          </header>
          <div className='App-body'>
            <KeyBoard/>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
