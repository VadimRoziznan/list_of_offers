import './App.css';
import { Listing } from './components/Listing';
import etsyData from './components/data/etsy.json';


function App() {
  return (
    <div id='root' className="App">
      <header className="App-header">
        <Listing items={etsyData}/>
      </header>
    </div>
  );
}

export default App;
