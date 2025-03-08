import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom"; // Usando Routes e Route para definir as páginas
import { auth } from "./firebase-config"; // Certifique-se de importar o Firebase corretamente
import { onAuthStateChanged } from "firebase/auth"; // Para verificar o estado de autenticação do usuário

import Header from "./components/Header"; // Importando Header
import Footer from "./components/Footer"; // Importando Footer
import Home from "./pages/Home"; // Página Home, a primeira tela
import Login from "./pages/Login"; // Página de Login
import Cadastro from "./pages/Cadastro"; // Página de Cadastro
import SobreNos from "./pages/SobreNos"; // Página Sobre Nós
import Imoveis from "./pages/Imoveis"; // Página Imóveis
import Contatos from "./pages/Contatos"; // Página Contatos

import "./index.css"; // Importando o CSS do Tailwind

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial como Home */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<SobreNos />} />
        <Route path="/imoveis" element={<Imoveis />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
