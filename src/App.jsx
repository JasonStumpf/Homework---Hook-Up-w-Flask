import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Pokemon from './views/Pokemon';
import MyNav from './components/MyNav';
import Cart from './views/Cart';
import Details from './views/Details'

function App() {
  const linkAndy = 'https://www.google.com/'

  return (
    <>
      <MyNav />
      <Routes>
        <Route children path='/' element={<Landing />} />
        <Route children path='/pokemon' element={<Pokemon />} />
        <Route children path='/cart' element={<Cart />} />
        <Route children path="/pokemon/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;