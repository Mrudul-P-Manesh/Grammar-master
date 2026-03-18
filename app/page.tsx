import Link from 'next/link';
import { ArrowRight, CheckCircle2, BookOpen, BrainCircuit, Target } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 mb-8 border border-indigo-100">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
            Master English Grammar Today
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 font-display">
            Write with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Confidence</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Clarity</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mb-10">
            An interactive learning platform designed to help you understand and master English grammar concepts, from simple sentence structures to complex clauses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-xl hover:bg-indigo-700 shadow-sm hover:shadow-md transition-all"
            >
              Start Learning Now
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm hover:shadow transition-all"
            >
              Try AI Practice
              <BrainCircuit className="ml-2 -mr-1 w-5 h-5 text-gray-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Why Choose GrammarMaster?</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to improve your English writing skills.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Structured Lessons</h3>
              <p className="text-gray-600">Step-by-step guides covering all major grammar rules with clear examples.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Quizzes</h3>
              <p className="text-gray-600">Test your knowledge immediately after learning with our built-in exercises.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-fuchsia-100 text-fuchsia-600 rounded-xl flex items-center justify-center mb-6">
                <BrainCircuit className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Practice</h3>
              <p className="text-gray-600">Get endless unique practice sentences and real-time feedback on your answers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
