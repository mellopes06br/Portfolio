"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaRegUserCircle, FaGamepad, FaComputer } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdComputer } from "react-icons/md";


export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-sans p-6 overflow-hidden">
    
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-5xl w-full bg-indigo-950/75 bg-opacity-5 backdrop-filter backdrop-blur-sm border-purple-400 border-opacity-30 rounded-2xl shadow-xl p-8 md:p-12 space-y-10 md:space-y-0 md:space-x-16 animate-fade-in-scale">

      
        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 bg-gradient-to-r from-purple-400 to-indigo-900 shadow-lg transition-transform duration-500 hover:scale-105 hover:border-violet-400">
          <Image
            src="/melportfolio.jpg" 
            alt="Foto de perfil de Mel Lopes"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-900 animate-text-gradient-flow">
            Mel Lopes
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white leading-relaxed font-light">
            Desenvolvedora Full Stack e Designer UI/UX. Crio soluções digitais intuitivas e de alto impacto, unindo código elegante e interfaces memoráveis.
          </p>

       
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-4 w-full sm:w-auto">
    
            <a
              href="https://www.linkedin.com/in/mellopes" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-violet-900 hover:bg-violet-600 transition-all duration-300 shadow-md transform hover:-translate-y-1"
              aria-label="Perfil LinkedIn de Mel Lopes"
            >
              <FaLinkedin size={24} className="text-purple-300 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/mellopes" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-violet-900 hover:bg-violet-600 transition-all duration-300 shadow-md transform hover:-translate-y-1"
              aria-label="Perfil GitHub de Mel Lopes"
            >
              <FaGithub size={24} className="text-purple-300 group-hover:text-white" />
            </a>

             <a
              href="./sobre"
              className="group flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-violet-900 hover:bg-violet-600 transition-all duration-300 shadow-md transform hover:-translate-y-1"
              aria-label="Página Sobre Mim"
            >
              <FaRegUserCircle size={24} className="text-purple-300 group-hover:text-white" />
            </a>

            <a
              href="./academia"
              className="group flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-violet-900 hover:bg-violet-600 transition-all duration-300 shadow-md transform hover:-translate-y-1"
              aria-label="Página sobre vida acadêmica"
            >
              <HiOutlineAcademicCap size={24} className="text-purple-300 group-hover:text-white" />
            </a>
            
            <a
              href="./jogo"
              className="group flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-violet-900 hover:bg-violet-600 transition-all duration-300 shadow-md transform hover:-translate-y-1"
              aria-label="Página do Jogo"
            >
              <FaGamepad size={24} className="text-purple-300 group-hover:text-white" />
            </a>

            <a
              href="./projetos"
              className="group flex items-center justify-center w-full sm:w-12 h-12 rounded-full bg-violet-900 hover:bg-violet-600 transition-all duration-300 shadow-md transform hover:-translate-y-1"
              aria-label="Página dos Projetos"
            >
              <MdComputer size={24} className="text-purple-300 group-hover:text-white" />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
