// Importação dos componentes necessários
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login"

// COmponente funcional principal App
function App() {
  return (
    <div>
      {/* Componente Router do React Router */}
      <Router>
        {/* Componente Header */}
        <Header />

        {/* Definição das rotas */}
        <Routes>
            {/* Rota para a página inicial */}
            <Route path="/" element={<Home />} />

            {/* Rota para a página "Sobre" */}
            {/* <Route path="/book" element={<Book />} /> */}

            {/* Rota para a página "Contato" */}
            <Route path="/contact" element={<Login />} />

            {/* Rota para a página "Contato" */}
            {/* <Route path="/login" element={<Login/>} /> */}



        </Routes>
        
      </Router>
    </div>
  );
}

export default App;