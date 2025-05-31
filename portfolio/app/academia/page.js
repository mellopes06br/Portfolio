import React from 'react';
import { FaGraduationCap, FaBook } from 'react-icons/fa'; // Ícones para a página

const AcademicExperience = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 p-8 md:p-12 animate-fade-in">
            <div className="max-w-4xl mx-auto bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8 md:p-10 border border-purple-400 border-opacity-30">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 animate-text-gradient-flow text-outline-white">
                    Experiência Acadêmica
                </h1>

                <section className="mb-10">
                    <div className="flex items-start mb-6 animate-slide-in-left">
                        <FaGraduationCap size={30} className="text-purple-300 mr-4 mt-1" />
                        <div>
                            <h2 className="text-2xl font-bold text-indigo-300">Tecnólogo em Sistemas para Internet</h2>
                            <p className="text-xl text-gray-300">Universidade Católica de Pernambuco (UNICAP)</p>
                            <p className="text-md text-gray-400">2024 - Atualmente (3º Período)</p>
                            <ul className="list-disc list-inside mt-2 text-gray-300">
                                <li>Foco em Desenvolvimento Web (Front-end e Back-end), Banco de Dados e Redes.</li>
                                <li>Estudo de tecnologias modernas para a construção de aplicações web.</li>
                                <li>Participação em projetos práticos e desafios de programação.</li>
                            </ul>
                        </div>
                    </div>
                    {/* 
          <div className="flex items-start mb-6 animate-slide-in-right">
            <FaBook size={30} className="text-purple-300 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-indigo-300">Curso de Especialização em UX/UI Design</h2>
              <p className="text-xl text-gray-300">Alura Online</p>
              <p className="text-md text-gray-400">2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Aprofundamento em princípios de usabilidade e experiência do usuário.</li>
                <li>Criação de protótipos de alta fidelidade com Figma.</li>
                <li>Estudo de metodologias de design thinking e pesquisa de usuário.</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start animate-slide-in-left">
            <FaBook size={30} className="text-purple-300 mr-4 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-indigo-300">Bootcamp Desenvolvedor Full Stack</h2>
              <p className="text-xl text-gray-300">Digital Innovation One (DIO)</p>
              <p className="text-md text-gray-400">2022</p>
              <ul className="list-disc list-inside mt-2 text-gray-300">
                <li>Desenvolvimento de aplicações web completas com tecnologias front-end e back-end.</li>
                <li>Foco em React, Node.js, Express e MongoDB.</li>
                <li>Projetos práticos e desafios de codificação.</li>
              </ul>
            </div>
          </div>
          */}
                </section>
            </div>
        </div>
    );
};

export default AcademicExperience;
