import React from 'react';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si'; 

const About = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8 md:p-12 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 md:p-10 border border-purple-400 border-opacity-30">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 animate-text-gradient-flow">
          Sobre Mim
        </h1>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4 text-purple-300">Minha Jornada</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Olá! Sou a Mel Lopes, uma desenvolvedora apaixonada por criar experiências digitais intuitivas e impactantes. Minha jornada no mundo da tecnologia começou com uma curiosidade insaciável por como as coisas funcionam e como podemos construir ferramentas que facilitam a vida das pessoas.
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mt-4">
            Com foco em desenvolvimento Full Stack e um olhar atento para o design UI/UX, busco sempre aprimorar minhas habilidades e entregar soluções robustas, escaláveis e visualmente atraentes. Acredito que a tecnologia tem o poder de transformar, e estou sempre em busca de novos desafios para aplicar e expandir meu conhecimento.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-purple-300">Tecnologias Utilizadas Neste Portfólio</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Este portfólio foi cuidadosamente construído utilizando as seguintes tecnologias e módulos para garantir uma experiência moderna, responsiva e de alta performance:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <FaReact size={40} className="text-blue-400 mb-2" />
              <span className="text-md font-medium text-gray-200">React.js</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <SiNextdotjs size={40} className="text-white mb-2" />
              <span className="text-md font-medium text-gray-200">Next.js</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <SiTailwindcss size={40} className="text-cyan-400 mb-2" />
              <span className="text-md font-medium text-gray-200">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <FaJsSquare size={40} className="text-yellow-400 mb-2" />
              <span className="text-md font-medium text-gray-200">JavaScript</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <FaHtml5 size={40} className="text-orange-500 mb-2" />
              <span className="text-md font-medium text-gray-200">HTML5</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <FaCss3Alt size={40} className="text-blue-500 mb-2" />
              <span className="text-md font-medium text-gray-200">CSS3</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <FaGitAlt size={40} className="text-red-600 mb-2" />
              <span className="text-md font-medium text-gray-200">Git</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <FaNodeJs size={40} className="text-green-500 mb-2" />
              <span className="text-md font-medium text-gray-200">Node.js (Ambiente)</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <SiVercel size={40} className="text-white mb-2" />
              <span className="text-md font-medium text-gray-200">Vercel (Deploy)</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <FaFigma size={40} className="text-pink-500 mb-2" />
              <span className="text-md font-medium text-gray-200">Figma (Design)</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
