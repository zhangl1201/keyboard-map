import logo from './logo.svg';
import './App.scss';
import KeyBoard from './Key-Board/KeyBoard';
import BubbleBackground from './BubbleBackground/BubbleBackground';
import background from './Assets/heineken.jpg';
import cocacola from './Assets/cocacola.jpg';
import PaintBoard from './Paint-Board/PaintBoard';

function App() {
  return (
    <div className='App-container'>
      {/* <BubbleBackground></BubbleBackground> */}
      <div className='App-content'>
        <div className="App">
          <header className="App-header">
            <span className="App-title">Smarter Clean !!!</span>
          </header>
          <div className='Key-Board-Container'>
              <KeyBoard/>
          </div>
        </div>
      </div>
      <PaintBoard/>
    </div>
    
  );
}

export default App;
