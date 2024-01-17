import { Footer } from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
