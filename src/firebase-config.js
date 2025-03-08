// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importando a autenticação do Firebase
import { getFirestore } from "firebase/firestore"; // Importando o Firestore

// Configuração do Firebase fornecida
const firebaseConfig = {
  apiKey: "AIzaSyB19e1gp8OKGpjiknXxmnx_ieabQhpbINA",
  authDomain: "vagouappweb.firebaseapp.com",
  projectId: "vagouappweb",
  storageBucket: "vagouappweb.firebasestorage.app",
  messagingSenderId: "235753858628",
  appId: "1:235753858628:web:790fae959fc83e3b767e11",
  measurementId: "G-Z38XX17QV8"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o auth (autenticação) e db (Firestore)
const auth = getAuth(app); // Inicializa o auth
const db = getFirestore(app); // Inicializa o Firestore

// Exportando auth e db para serem usados em outros arquivos
export { auth, db };
