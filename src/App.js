import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/banho-e-tosa" />
          <Route path="/hotel-resort" />
          <Route path="/adestramento" />
      </Routes>
    </Router>
  );
}

export default App;
