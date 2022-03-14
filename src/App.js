import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Pages/Home';
import Contato from './components/Pages/Contato';
import Empresa from './components/Pages/Empresa';
import NovoProjeto from './components/Pages/NovoProjeto';
import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Empresa">Empresa</Link>
        <Link to="/Contato">Contato</Link>
        <Link to="/Novo_Projeto">Novo Projeto</Link>
      </ul>
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/Empresa" element={<Empresa />}> </Route>
          <Route path="/Contato" element={<Contato />}> </Route>
          <Route path="/Novo_Projeto" element={<NovoProjeto />}> </Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App;
