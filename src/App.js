import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Tp from './components/Tp/Tp'
import Acronym from './components/Acronym/Acronym';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tp" element={<Tp />} />
        <Route path="/acronym" element={<Acronym />} />
      </Routes>
    </div>
  );
}

export default App;
