import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Pokemon from './views/Pokemon';
import MyNav from './components/MyNav';

function App() {
  const linkAndy = 'https://www.google.com/'

  return (
    <>
      <MyNav />
      <Routes>
        <Route children path='/' element={<Landing />} />
        <Route children path='/pokemon' element={<Pokemon />} />
      </Routes>
    </>
  );
}

export default App;