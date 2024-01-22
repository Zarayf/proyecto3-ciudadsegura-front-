import { Footer } from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Login } from './pages/Login';
import { Home } from './pages/home'; 
import { AdminPage } from './pages/AdminPage';
import { NewProblem } from './pages/newProblem';  
import { EditProblem } from './pages/EditProblem';
import { ListProblem } from './pages/listProblem';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AdminPage' element={<AdminPage />} />
        <Route path='/NewProblem' element={<NewProblem />} />
        <Route path='/EditProblem' element={<EditProblem />} />
        <Route path='/ListProblem' element={<ListProblem />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Home />} />
      
      </Routes>

      <Footer />
    </>
  );
}

export default App;
