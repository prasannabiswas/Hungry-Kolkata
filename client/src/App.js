import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Home from './Component/Home/Home';


function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
