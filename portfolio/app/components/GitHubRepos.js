"use client";

import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar } from 'react-icons/fa'; 

const GITHUB_USERNAME = 'mellopes06br'; 

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);

    
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`);

        if (!response.ok) {
          throw new Error(`Erro ao buscar repositórios: ${response.statusText}`);
        }

        const data = await response.json();
        
        const userRepos = data.filter(repo => !repo.fork && !repo.archived);
        setRepos(userRepos.slice(0, 6));
      } catch (err) {
        console.error("Erro ao buscar repositórios do GitHub:", err);
        setError("Não foi possível carregar os repositórios. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []); 

  if (loading) {
    return (
      <div className="text-white text-center p-10">
        <p className="text-2xl text-purple-300 animate-pulse">Carregando projetos do GitHub...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400 text-center p-10">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  
  if (repos.length === 0) {
    return (
      <div className="text-gray-400 text-center p-10">
        <p className="text-xl">Nenhum projeto público recente encontrado no GitHub.</p>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url} 
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group"
          >
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 truncate">
              {repo.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {repo.description || 'Sem descrição.'}
            </p>
            <div className="flex items-center text-gray-500 text-xs mt-auto">
              {repo.language && (
                <span className="mr-3 px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                  {repo.language}
                </span>
              )}
              <span className="flex items-center">
                <FaStar className="w-4 h-4 mr-1 text-yellow-300" />
                {repo.stargazers_count}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 text-lg shadow-lg"
        >
          Ver Todos os Repositórios no GitHub
        </a>
      </div>
    </section>
  );
}
