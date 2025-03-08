import React from "react";
import {
  Email as MailIcon,
  Phone as PhoneIcon,
  LocationOn as MapPinIcon,
} from "@mui/icons-material";

function Contatos() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-600">
            Estamos aqui para ajudar! Entre em contato conosco através dos
            canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MailIcon
                  sx={{ fontSize: 24, color: "#3b82f6", marginTop: "0.25rem" }}
                />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">contato@vagou.app</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PhoneIcon
                  sx={{ fontSize: 24, color: "#3b82f6", marginTop: "0.25rem" }}
                />
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <p className="text-gray-600">(00) 0000-0000</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPinIcon
                  sx={{ fontSize: 24, color: "#3b82f6", marginTop: "0.25rem" }}
                />
                <div>
                  <h3 className="font-medium">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Instagram
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Facebook
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contatos;
