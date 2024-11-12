import React, { useState } from 'react';
import './QuizErosion.css';
import Navbarcom from '../../../components/Navbarcom';

const QuizErosion = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "¿Por qué la tala de árboles causa erosión del suelo?",
      answers: [
        { text: "Porque se pierde la capa protectora del suelo", correct: true },
        { text: "Porque mejora la calidad del suelo", correct: false },
        { text: "Porque atrae más lluvia", correct: false },
      ],
    },
    {
      question: "¿Qué sucede cuando el suelo queda expuesto sin raíces?",
      answers: [
        { text: "Se vuelve más fértil", correct: false },
        { text: "Es más propenso a la erosión", correct: true },
        { text: "Absorbe mejor el agua", correct: false },
      ],
    },
    {
      question: "¿Qué acción ayuda a prevenir la erosión del suelo?",
      answers: [
        { text: "Aumentar la deforestación", correct: false },
        { text: "Plantar árboles", correct: true },
        { text: "Eliminar la cobertura vegetal", correct: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <Navbarcom />
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            Obtuviste {score} de {questions.length} respuestas correctas.
          </div>
        ) : (
          <div className="question-section">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="answer-section">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answer.correct)}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default QuizErosion;