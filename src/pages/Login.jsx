import React, { useState } from "react"; // Importando hooks do React
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate do React Router
import { signInWithEmailAndPassword } from "firebase/auth"; // Importando o método de login do Firebase
import { auth } from "../firebase-config"; // Importando a configuração do Firebase
import { sendPasswordResetEmail } from "firebase/auth"; // Importando a função de recuperação de senha

const Login = () => {
  // Declarando os estados para email, senha e erro
  const [email, setEmail] = useState(""); // Armazena o e-mail
  const [password, setPassword] = useState(""); // Armazena a senha
  const [error, setError] = useState(""); // Armazena mensagens de erro
  const [emailSent, setEmailSent] = useState(false); // Para controlar a mensagem de email enviado

  const navigate = useNavigate(); // Aqui você usa o hook dentro do componente

  // Função chamada quando o formulário é enviado
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    try {
      // Tentando fazer login com Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Dados do usuário retornados

      console.log("Usuário logado:", user);
      alert("Login bem-sucedido!");
      
      // Após o login, redireciona o usuário para a página principal
      navigate("/"); // Isso vai te levar para a homepage (ou outra página desejada)

    } catch (error) {
      setError("Credenciais inválidas ou erro ao fazer login. Tente novamente.");
      console.error("Erro de autenticação:", error.message);
    }
  };

  // Função para recuperação de senha
  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
      alert("E-mail de redefinição de senha enviado!");
    } catch (error) {
      setError("Erro ao tentar enviar o e-mail de redefinição.");
      console.error("Erro ao enviar e-mail de redefinição:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-3/4 rounded-lg overflow-hidden shadow-lg">
        {/* Imagem do lado esquerdo */}
        <div className="w-1/2 h-full">
          <img src="/assets/loginimage.png" alt="Login Background" className="w-full h-full object-cover" />
        </div>

        {/* Formulário de login */}
        <div className="w-1/2 p-8 bg-white">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <p className="mb-6">Bem-vindo de volta!</p>

          {/* Formulário */}
          <form onSubmit={handleSubmit}>
            {/* Campo de e-mail */}
            <div className="mb-4">
              <label className="block text-gray-700">E-mail</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-full mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Atualiza o valor do e-mail
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
                onChange={(e) => setPassword(e.target.value)} // Atualiza o valor da senha
                required
              />
            </div>

            {/* Link para recuperação de senha */}
            <button 
              type="button" 
              onClick={handlePasswordReset}
              className="block text-blue-600 mb-4"
            >
              Esqueci a senha
            </button>

            {/* Botão de login */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-full mb-4"
            >
              Entrar
            </button>
          </form>

          {/* Exibição de erro caso ocorra */}
          {error && <p className="text-red-600">{error}</p>}

          {/* Exibição de confirmação de envio de e-mail */}
          {emailSent && <p className="text-green-600">E-mail enviado com sucesso!</p>}

          {/* Link para criar conta */}
          <p className="text-gray-700">
            Ainda não tem uma conta?{" "}
            <a href="/cadastro" className="text-blue-600">
              Criar conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
