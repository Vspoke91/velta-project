import './App.css';
import Content from './Content';
import Header from './Header';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Header logo_Name={'Velta Projects'}/>
      <div className='App-main'>
        <Navigation/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
