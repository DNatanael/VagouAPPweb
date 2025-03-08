import React, { useState } from 'react';
import Imagemcadastro from "/assets/loginimage.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"; // Importando a configuração do Firebase

const Cadastro = () => {
  // Declarando os estados para armazenar os valores dos campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // Estado para o sucesso do cadastro

  // Função de envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se as senhas são iguais
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    // Verificar se o e-mail tem formato válido
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    // Caso o formulário passe na validação
    setError(''); // Limpa qualquer erro
    try {
      // Criando usuário no Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      alert('Conta criada com sucesso!');
      
      // Limpar os campos após o envio
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setCountry('');
      setCity('');
    } catch (error) {
      setError('Erro ao criar a conta. Tente novamente.');
      console.error("Erro de cadastro:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 rounded-lg overflow-hidden shadow-lg">
        
        {/* Imagem de fundo */}
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src={Imagemcadastro} // Utilizando a importação direta da imagem
            alt="Cadastro Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formulário */}
        <div className="w-1/2 p-8 bg-white overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4">Cadastro Vagou</h2>
          <p className="mb-6">Crie sua conta para começar</p>

          {/* Exibição de erros */}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          {/* Exibição de sucesso */}
          {success && <p className="text-green-600 mb-4">Cadastro realizado com sucesso!</p>}

          <form onSubmit={handleSubmit}>
            {/* Campo de nome */}
            <div className="mb-4">
              <label className="block text-gray-700">Nome</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-full mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Campo de e-mail */}
            <div className="mb-4">
              <label className="block text-gray-700">E-mail</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-full mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Campo de senha */}
            <div className="mb-4">
              <label className="block text-gray-700">Senha</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-full mt-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirmação de senha */}
            <div className="mb-4">
              <label className="block text-gray-700">Confirmação de senha</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-full mt-1"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Campo de país */}
            <div className="mb-4">
              <label className="block text-gray-700">País em que mora</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-full mt-1"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            {/* Campo de cidade */}
            <div className="mb-4">
              <label className="block text-gray-700">Cidade em que mora</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-full mt-1"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            {/* Botão de criação de conta */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-full mb-4"
            >
              Criar conta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
