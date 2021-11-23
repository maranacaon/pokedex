import PokemonList from "./pages/PokemonList/PokemonList";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PokemonList/>}/>
        <Route exact path="/pokemon/:id" element={<PokemonDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
