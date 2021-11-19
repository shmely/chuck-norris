import Header from "./cmps/Header";
import Random from "./cmps/Random";
import Search from "./cmps/Search";
import { 
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Random />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
