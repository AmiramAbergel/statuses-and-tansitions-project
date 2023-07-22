import './App.css';
import ElementControl from './components/ElementControl/ElementControl';
import ElementsList from './components/ElementsList/ElementsList';
import NewElement from './components/NewElement/NewElement';
import Header from './components/UI/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <ElementControl />

      <div>
        <div>
          <NewElement type="status" />
          <ElementsList type="status" elements={[]} />
        </div>
        <div>
          <NewElement type="transition" />
          <ElementsList type="transition" elements={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
