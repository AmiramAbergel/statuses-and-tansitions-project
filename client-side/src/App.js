import './App.css';
import ElementControl from './components/ElementControl/ElementControl';
import ElementsList from './components/ElementsList/ElementsList';
import Header from './components/UI/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ElementControl />
      <ElementsList elements={[]} />
    </div>
  );
}

export default App;
