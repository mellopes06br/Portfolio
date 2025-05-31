"use client";

import React, { useState, useEffect, useRef } from "react";

// Função para gerar um código secreto de 4 dígitos únicos
const generateSecretCode = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let code = [];
  while (code.length < 4) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    code.push(digits.splice(randomIndex, 1)[0]); // Pega um dígito e o remove da lista
  }
  return code.join(""); // Retorna como string
};

// Componente principal do Jogo da Senha
export default function Jogo() {
  const [secretCode, setSecretCode] = useState("");
  const [guesses, setGuesses] = useState([]); // { guess: '1234', bulls: 1, cows: 2 }
  const [currentGuess, setCurrentGuess] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [inputError, setInputError] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const inputRef = useRef(null); // Ref para focar o input após cada tentativa

  // Inicia um novo jogo quando o componente é montado
  useEffect(() => {
    startNewGame();
  }, []); // O array vazio garante que o useEffect rode apenas uma vez ao montar o componente

  // Foca no input após cada tentativa ou início de jogo
  useEffect(() => {
    if (inputRef.current && !gameOver) {
      inputRef.current.focus();
    }
  }, [guesses, gameOver]);

  // Função para iniciar/reiniciar o jogo
  const startNewGame = () => {
    setSecretCode(generateSecretCode());
    setGuesses([]);
    setCurrentGuess("");
    setAttemptsLeft(10);
    setGameOver(false);
    setGameWon(false);
    setInputError("");
    setShowMessage(false);
    setMessageText("");
    // console.log("Novo jogo iniciado. Código secreto:", generateSecretCode()); // Para debug, pode remover
  };

  // Valida o input do usuário
  const validateGuess = (guess) => {
    if (guess.length !== 4) {
      return "A senha deve ter 4 dígitos.";
    }
    for (let i = 0; i < guess.length; i++) {
      const char = guess[i];
      if (char < "0" || char > "9") {
        return "A senha deve conter apenas números.";
      }
    }
    if (new Set(guess.split("")).size !== 4) {
      return "Os dígitos da senha devem ser únicos.";
    }
    return ""; // Retorna string vazia se válido
  };

  // Calcula 'Bulls' e 'Cows'
  const calculateBullsAndCows = (guess, secret) => {
    let bulls = 0;
    let cows = 0;
    const secretArr = secret.split("");
    const guessArr = guess.split("");

    for (let i = 0; i < 4; i++) {
      if (guessArr[i] === secretArr[i]) {
        bulls++;
      } else if (secretArr.includes(guessArr[i])) {
        cows++;
      }
    }
    return { bulls, cows };
  };

  // Lida com a submissão da tentativa do usuário
  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (gameOver) return;

    const error = validateGuess(currentGuess);
    if (error) {
      setInputError(error);
      return;
    }
    setInputError(""); // Limpa erros anteriores

    const { bulls, cows } = calculateBullsAndCows(currentGuess, secretCode);

    const newGuesses = [{ guess: currentGuess, bulls, cows }];
    setGuesses((prevGuesses) => [...newGuesses, ...prevGuesses]); // Adiciona no início para ordem reversa
    setCurrentGuess("");
    setAttemptsLeft((prev) => prev - 1);

    if (bulls === 4) {
      setGameWon(true);
      setGameOver(true);
      setMessageText(`Parabéns! Você acertou a senha '${secretCode}'!`);
      setShowMessage(true);
    } else if (attemptsLeft - 1 === 0) { // Verifica se esta é a última tentativa
      setGameOver(true);
      setMessageText(
        `Fim de jogo! Você não conseguiu adivinhar a senha. A senha era '${secretCode}'.`
      );
      setShowMessage(true);
    }
  };

  // Lida com a mudança no input
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Permite apenas 4 dígitos numéricos
    if (value.length <= 4 && /^\d*$/.test(value)) {
      setCurrentGuess(value);
      if (inputError && validateGuess(value) === "") {
        setInputError(""); // Limpa o erro se o input se tornar válido
      }
    }
  };

  // Exibe a senha secreta em uma caixa de mensagem personalizada
  const revealSecretCode = () => {
    setMessageText(`A senha secreta era: ${secretCode}`);
    setShowMessage(true);
  };

  // Fecha a caixa de mensagem personalizada
  const closeMessage = () => {
    setShowMessage(false);
    setMessageText("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      {/* Caixa de Mensagem Personalizada */}
      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 p-8 rounded-lg shadow-2xl border border-purple-600 text-center max-w-md w-full">
            <p className="text-xl md:text-2xl mb-6 font-semibold">
              {messageText}
            </p>
            <button
              onClick={closeMessage}
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors duration-300 transform hover:scale-105 shadow-md"
            >
              Entendi
            </button>
          </div>
        </div>
      )}

      {/* Conteúdo principal do Jogo */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl w-full bg-indigo-950/75 bg-opacity-5 backdrop-filter backdrop-blur-sm border-purple-400 border-opacity-30 rounded-2xl shadow-xl p-8 md:p-12 space-y-8 animate-fade-in-scale">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 animate-text-gradient-flow text-outline-white">
          Jogo da Senha
        </h1>

        <div className="w-full max-w-lg">
          <p className="text-lg mb-4 text-center text-gray-200">
            Adivinhe a senha de 4 dígitos únicos!
          </p>
          <p className="text-md mb-6 text-center text-gray-300">
            Tentativas restantes:{" "}
            <span className="font-bold text-purple-300">{attemptsLeft}</span>
          </p>

          {!gameOver ? (
            <form
              onSubmit={handleGuessSubmit}
              className="flex flex-col items-center"
            >
              <input
                ref={inputRef}
                type="text"
                value={currentGuess}
                onChange={handleInputChange}
                maxLength="4"
                placeholder="Digite sua senha (ex: 1234)"
                className="w-full p-3 mb-4 text-center text-xl bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 text-white"
                disabled={gameOver}
              />
              {inputError && (
                <p className="text-red-400 text-sm mb-4">{inputError}</p>
              )}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentGuess.length !== 4 || gameOver}
              >
                Adivinhar
              </button>
            </form>
          ) : (
            <div className="text-center mt-6">
              <button
                onClick={startNewGame}
                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-colors duration-300 transform hover:scale-105 shadow-lg mr-4"
              >
                Novo Jogo
              </button>
              <button
                onClick={revealSecretCode}
                className="px-8 py-4 bg-yellow-600 text-white font-semibold rounded-full hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Revelar Senha
              </button>
            </div>
          )}
        </div>

        {/* Lista de Tentativas Anteriores */}
        {guesses.length > 0 && (
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 w-full max-w-lg mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-300">
              Tentativas Anteriores
            </h2>
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
              {guesses.map((g, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 mb-2 rounded-lg ${
                    g.bulls === 4
                      ? "bg-green-900 border-green-700"
                      : "bg-gray-700 border-gray-600"
                  }`}
                >
                  <span className="font-mono text-xl text-white">
                    {g.guess}
                  </span>
                  <div className="flex space-x-4 text-lg">
                    <span className="text-red-400">Bulls: {g.bulls}</span>
                    <span className="text-blue-400">Cows: {g.cows}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Estilos CSS para o scrollbar customizado (mantidos aqui para especificidade do jogo) */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #334155; /* slate-700 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #8b5cf6; /* purple-500 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7c3aed; /* purple-600 */
        }
      `}</style>
    </div>
  );
}
