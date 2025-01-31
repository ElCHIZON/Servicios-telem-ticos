import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import MyForm from './components/CrearTicket';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import VerTickets from './components/VerTickets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/crear-ticket" element={<MyForm />} />
          <Route path="/ver-tickets" element={<VerTickets />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;