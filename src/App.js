import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"
import Beers from "./pages/Beers"
import RandomBeer from "./pages/RandomBeer"
import NewBeer from "./pages/NewBeer"
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path= "/" element={<HomePage/>} />
      <Route exact path= "/beers" element={<Beers/>} />
      <Route exact path= "/random-beer" element={<RandomBeer/>} />
      <Route exact path= "new-beer" element={<NewBeer/>} />
      <Route exact path= "/beer/:beerId" element={<BeerDetails/>} />
    </Routes>
    
    </div>
  );
}

export default App;
