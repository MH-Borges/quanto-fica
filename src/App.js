import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home';
import Contato from './components/Pages/Contato';
import Empresa from './components/Pages/Empresa';
import NovoProjeto from './components/Pages/NovoProjeto';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projetos from './components/Pages/Projetos';


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/Projetos" element={<Projetos />}> </Route>
          <Route path="/Empresa" element={<Empresa />}> </Route>
          <Route path="/Contato" element={<Contato />}> </Route>
          <Route path="/Novo_Projeto" element={<NovoProjeto />}> </Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
