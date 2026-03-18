'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizProps {
  quiz: {
    question: string;
    options: string[];
    answer: number;
    explanation: string;
  }[];
}

export function Quiz({ quiz }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!quiz || quiz.length === 0) return null;

  const question = quiz[currentQuestion];
  const isCorrect = selectedOption === question.answer;

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsSubmitted(true);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mt-12">
      <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex justify-between items-center">
        <h3 className="font-bold text-indigo-900">Knowledge Check</h3>
        <span className="text-sm font-medium text-indigo-700">
          Question {currentQuestion + 1} of {quiz.length}
        </span>
      </div>
      
      <div className="p-6">
        <p className="text-lg font-medium text-gray-900 mb-6">{question.question}</p>
        
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => {
            let optionClass = "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700";
            
            if (isSubmitted) {
              if (index === question.answer) {
                optionClass = "border-emerald-500 bg-emerald-50 text-emerald-800";
              } else if (index === selectedOption) {
                optionClass = "border-red-500 bg-red-50 text-red-800";
              } else {
                optionClass = "border-gray-200 opacity-50";
              }
            } else if (selectedOption === index) {
              optionClass = "border-indigo-600 bg-indigo-50 text-indigo-800 ring-1 ring-indigo-600";
            }

            return (
              <button
                key={index}
                onClick={() => !isSubmitted && setSelectedOption(index)}
                disabled={isSubmitted}
                className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all ${optionClass}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isSubmitted && index === question.answer && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                  {isSubmitted && index === selectedOption && index !== question.answer && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className={`p-4 rounded-xl mb-6 ${isCorrect ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'}`}>
            <p className="font-semibold mb-1">{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentQuestion === quiz.length - 1}
              className="px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentQuestion === quiz.length - 1 ? 'Quiz Completed' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
