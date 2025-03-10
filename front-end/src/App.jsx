
import './css/App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favourite from './pages/Favourites';
import NavBar from './components/NavBar';

function App() {

  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favourite />} />
      </Routes>
    </main>
    </div>
  );
}


export default App
