'use client';

import { useState } from 'react';
import { BrainCircuit, Loader2, CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { practiceQuestions } from '@/data/practiceQuestions';

const practiceModes = [
  { id: 'active-passive', name: 'Active to Passive Voice' },
  { id: 'passive-active', name: 'Passive to Active Voice' },
  { id: 'direct-indirect', name: 'Direct to Indirect Speech' },
  { id: 'combine-sentences', name: 'Combine into Complex Sentence' }
];

export default function PracticePage() {
  const [mode, setMode] = useState(practiceModes[0]);
  const [loading, setLoading] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<{ challenge: string, expected: string, hint: string } | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const generateChallenge = () => {
    setLoading(true);
    setUserAnswer('');
    setFeedback(null);
    
    // Simulate a slight delay for UI transition
    setTimeout(() => {
      const questions = practiceQuestions[mode.id];
      // Pick a random question that is different from the current one if possible
      let nextQuestion = questions[Math.floor(Math.random() * questions.length)];
      if (questions.length > 1 && currentQuestion && nextQuestion.challenge === currentQuestion.challenge) {
        nextQuestion = questions.find(q => q.challenge !== currentQuestion.challenge) || nextQuestion;
      }
      
      setCurrentQuestion(nextQuestion);
      setLoading(false);
    }, 400);
  };

  const evaluateAnswer = () => {
    if (!userAnswer.trim() || !currentQuestion) return;
    
    setEvaluating(true);
    
    setTimeout(() => {
      const normalize = (str: string) => str.toLowerCase().replace(/[.,!?"']/g, '').trim();
      const isCorrect = normalize(userAnswer) === normalize(currentQuestion.expected);
      
      if (isCorrect) {
        setFeedback({
          isCorrect: true,
          message: 'Perfect! Your sentence is grammatically correct and matches the expected format.',
        });
      } else {
        setFeedback({
          isCorrect: false,
          message: `Not quite right. Expected: "${currentQuestion.expected}"\nHint: ${currentQuestion.hint}`,
        });
      }
      setEvaluating(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-100 text-violet-600 mb-6">
          <BrainCircuit className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 font-display mb-4">AI Grammar Practice</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Practice your grammar skills with dynamically generated exercises and get instant, personalized feedback from our AI.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Practice Mode</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {practiceModes.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setMode(m);
                  setCurrentQuestion(null);
                  setUserAnswer('');
                  setFeedback(null);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-colors ${
                  mode.id === m.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {!currentQuestion && !loading ? (
            <div className="text-center py-12">
              <button
                onClick={generateChallenge}
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Generate First Challenge
              </button>
            </div>
          ) : loading ? (
            <div className="text-center py-12 flex flex-col items-center">
              <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-4" />
              <p className="text-gray-500">Generating challenge...</p>
            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-900 rounded-xl p-6 shadow-inner">
                <p className="text-sm text-indigo-400 font-mono mb-2">{`// Convert this sentence`}</p>
                <p className="text-xl text-white font-medium">{currentQuestion?.challenge}</p>
              </div>

              <div>
                <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Answer
                </label>
                <textarea
                  id="answer"
                  rows={3}
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  disabled={evaluating || feedback !== null}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:bg-gray-50 disabled:text-gray-500 transition-colors"
                  placeholder="Type your converted sentence here..."
                />
              </div>

              {feedback && (
                <div className={`p-6 rounded-xl flex items-start ${feedback.isCorrect ? 'bg-emerald-50 border border-emerald-100' : 'bg-red-50 border border-red-100'}`}>
                  {feedback.isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h4 className={`font-semibold mb-1 ${feedback.isCorrect ? 'text-emerald-900' : 'text-red-900'}`}>
                      {feedback.isCorrect ? 'Great job!' : 'Not quite right.'}
                    </h4>
                    <p className={feedback.isCorrect ? 'text-emerald-800' : 'text-red-800'}>
                      {feedback.message}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <button
                  onClick={generateChallenge}
                  disabled={evaluating}
                  className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Skip / New Challenge
                </button>
                
                {!feedback ? (
                  <button
                    onClick={evaluateAnswer}
                    disabled={!userAnswer.trim() || evaluating}
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                  >
                    {evaluating ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Evaluating...
                      </>
                    ) : (
                      'Check Answer'
                    )}
                  </button>
                ) : (
                  <button
                    onClick={generateChallenge}
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                  >
                    Next Challenge
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
