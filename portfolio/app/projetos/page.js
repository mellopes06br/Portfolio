import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // Ícones para links

// O componente ProjectCard agora renderiza um único projeto fixo
const ProjectCard = () => { // Não recebe props, pois os dados são fixos
  return (
    // O container agora é para um único card, não um grid
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-700 p-6 flex flex-col justify-between">
      <div>
        {/* Título do projeto hardcoded */}
        <h3 className="text-2xl font-bold text-indigo-300 mb-2">Mundo Animal</h3>
      </div>
      <div className="flex space-x-4 mt-4">
        {/* Link para o projeto online hardcoded */}
        <a
          href="https://mundo-animal.vercel.app/" // Link direto para o projeto online
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium"
        >
          <FaExternalLinkAlt className="mr-2" /> Ver Projeto
        </a>
        {/* Link para o repositório no GitHub hardcoded */}
        <a
          href="https://github.com/seu-usuario/mundo-animal" // Link direto para o repositório
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
