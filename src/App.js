import logo from './logo.svg';
import './App.scss';
import KeyBoard from './Key-Board/KeyBoard';
import background from './Assets/heineken.jpg';

function App() {
  return (
    <div className='App-container'>
      <div className='App-background'>
      <img alt='background' className='Image-background' src={background}></img>
      <img alt='background' className='Image-background' src={background}></img>
      <img alt='background' className='Image-background' src={background}></img>
      <img alt='background' className='Image-background' src={background}></img>
      </div>
      <div className='App-content'>
        <div className="App">
          <header className="App-header">
            <span className="App-title">React Test</span>
          </header>
          <body className='App-body'>
          <KeyBoard/>
          </body>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
