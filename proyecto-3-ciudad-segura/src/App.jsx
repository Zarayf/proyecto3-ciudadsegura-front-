import { Footer } from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { AdminPage } from './pages/AdminPage';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AdminPage' element={<AdminPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
