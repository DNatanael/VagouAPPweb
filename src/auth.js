// src/auth.js
import { auth, db } from "./firebase-config";  // Importa auth e db do firebase-config
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirecionar após login

// Função de Registro de Usuário
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuário registrado:", user);

    // Adiciona dados no Firestore
    const docRef = await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });
    console.log("Documento gravado com ID:", docRef.id);
  } catch (error) {
    console.error("Erro ao registrar:", error.message);
    throw new Error(error.message); // Lança erro para ser tratado no componente
  }
};

// Função de Login de Usuário
export const loginUser = async (email, password) => {
  const navigate = useNavigate(); // Usando o useNavigate dentro da função de login

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuário logado:", user);

    // Após o login, redireciona para a página inicial (ou outra página desejada)
    navigate("/"); // Redireciona para a página principal após login

  } catch (error) {
    console.error("Erro ao fazer login:", error.message);
    throw new Error("Credenciais inválidas ou erro ao fazer login. Tente novamente.");
  }
};
